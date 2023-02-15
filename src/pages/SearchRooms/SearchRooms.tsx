import { FC, useEffect, useMemo } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';
import { RoomCard } from '../../components/RoomCard/RoomCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CapacityId } from '../../shared/constants/CapacityId';
import { filterSelect } from '../../store/slices/filters/selectors';
import { filtersActions } from '../../store/slices/filters/slice';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import { loadRooms } from '../../store/slices/rooms/slice';
import { RoomData } from '../../types/RoomData';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
  const {
    rules,
    price,
    convenience,
    availability,
    furniture,
    capacity,
    selectedDates,
  } = useAppSelector(filterSelect);

  const { rooms } = useAppSelector(roomsSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rooms.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(loadRooms());
    } else {
      dispatch(filtersActions.syncFilters(rooms));
    }
  }, [rooms, dispatch]);

  const filteredRooms: RoomData[] = useMemo(
    () =>
      rooms.filter((room) => {
        const selectedRules = rules.filter((item) => item.isChecked);
        const hasRoomAllSelectedRules = selectedRules.every((item) =>
          Object.hasOwn(room.details, item.name)
        );
        if (!hasRoomAllSelectedRules) return false;

        const selectedAvailability = availability.filter(
          (item) => item.isChecked
        );
        const hasRoomSelectedAvailability = selectedAvailability.every((item) =>
          Object.hasOwn(room.details, item.name)
        );
        if (!hasRoomSelectedAvailability) return false;

        const selectedConvenience = convenience.filter(
          (item) => item.isChecked
        );
        const hasRoomSelectedConvenience = selectedConvenience.every((item) =>
          Object.hasOwn(room.details, item.name)
        );
        if (!hasRoomSelectedConvenience) return false;

        if (price) {
          if (room.price > price.to || price.from > room.price) {
            return false;
          }
        }

        for (let i = 0; i < room.furniture.length; i += 1) {
          const currentFurniture = room.furniture[i];
          const foundedFurnitureWithSameId = furniture.find(
            ({ id }) => id === currentFurniture.id
          );
          if (foundedFurnitureWithSameId) {
            if (foundedFurnitureWithSameId?.amount > currentFurniture.limit) {
              return false;
            }
          }
        }

        const guestAmount = capacity.reduce((acc, item) => {
          if (
            item.id === CapacityId.Adults ||
            item.id === CapacityId.Children
          ) {
            return acc + item.amount;
          }
          return acc;
        }, 0);

        const foundedRoomGuest = room.capacity.find(
          (item) => item.id === 'guest'
        );

        if (foundedRoomGuest) {
          if (foundedRoomGuest.limit < guestAmount) {
            return false;
          }
        }

        const foundedBabies = capacity.find(
          (item) => item.id === CapacityId.Babies
        );
        const foundedRoomBabies = room.capacity.find(
          (item) => item.id === 'baby'
        );
        if (foundedRoomBabies && foundedBabies) {
          if (foundedRoomBabies.limit < foundedBabies.amount) {
            return false;
          }
        }

        if (selectedDates.length === 2) {
          const { reservedDates } = room;
          const selectedFromDate = selectedDates[0];
          const selectedToDate = selectedDates[1];
          for (let i = 0; i < reservedDates.length - 1; i += 1) {
            const { from, to } = reservedDates[i];
            if (
              new Date(from.split('.').reverse().join('.')) >=
                selectedFromDate &&
              new Date(from.split('.').reverse().join('.')) < selectedToDate
            ) {
              return false;
            }

            if (
              new Date(to.split('.').reverse().join('.')) > selectedFromDate &&
              new Date(to.split('.').reverse().join('.')) <= selectedToDate
            ) {
              return false;
            }
          }
        }

        return true;
      }),
    [
      availability,
      capacity,
      convenience,
      furniture,
      price,
      rooms,
      rules,
      selectedDates,
    ]
  );

  return (
    <div className="search-rooms">
      <div className="search-rooms__filters-container">
        <Filters />
      </div>
      <div className="search-rooms__rooms-container">
        <h2 className="search-rooms__title">
          Номера, которые мы для вас подобрали
        </h2>
        <div className="search-rooms__rooms">
          {filteredRooms.slice(0, 12).map((room) => (
            <RoomCard
              key={room.roomNumber}
              id={String(room.roomNumber)}
              roomNumber={room.roomNumber}
              price={room.price}
              reviewsCount={room.reviewsCount}
              rateNumber={room.rating}
              imgsSrc={room.images}
            />
          ))}
        </div>
        <div className="search-rooms__pagination-container">
          <Pagination totalItems={180} itemsPerPage={12} />
        </div>
      </div>
    </div>
  );
};

export { SearchRooms };
