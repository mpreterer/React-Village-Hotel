import { FC, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ITEMS_PER_PAGE } from '../../shared/constants/paginationItems';
import { getRating } from '../../shared/helpers/getRating/getRating';
import { filterSelect } from '../../store/slices/filters/selectors';
import {
  activePageNumberSelect,
  roomsSelect,
} from '../../store/slices/rooms/selectors';
import { setActivePageNumber } from '../../store/slices/rooms/slice';
import { RoomData } from '../../types/RoomData';
import { Pagination } from '../Pagination/Pagination';
import { RoomCard } from '../RoomCard/RoomCard';

import {
  hasRoomAllSelectedRules,
  hasRoomSelectedAvailability,
  hasRoomSelectedConvenience,
  hasRoomSelectedDates,
  isRoomMatchCapacityLimit,
  isRoomMatchFurnitureLimit,
  isRoomPassToPrice,
} from './helpers';
import './Rooms.scss';

const Rooms: FC = () => {
  const dispatch = useAppDispatch();
  const rooms = useSelector(roomsSelect);
  const {
    rules,
    price,
    convenience,
    availability,
    furniture,
    capacity,
    selectedDates,
  } = useAppSelector(filterSelect);
  const currentPage = useSelector(activePageNumberSelect);

  const indexFrom = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexTo = currentPage * ITEMS_PER_PAGE;

  const handlePaginationPageClick = (pageNumber: number) => {
    dispatch(setActivePageNumber(pageNumber));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(setActivePageNumber(1));
  }, [
    rules,
    price,
    convenience,
    availability,
    furniture,
    capacity,
    selectedDates,
    dispatch,
  ]);

  const filteredRooms: RoomData[] = useMemo(
    () =>
      rooms.filter((room) => {
        if (!hasRoomAllSelectedRules(room, rules)) return false;

        if (!hasRoomSelectedAvailability(room, availability)) return false;

        if (!hasRoomSelectedConvenience(room, convenience)) return false;

        if (price && isRoomPassToPrice(room, price)) return false;

        if (!isRoomMatchFurnitureLimit(room, furniture)) return false;
        if (!isRoomMatchCapacityLimit(room, capacity)) return false;
        if (selectedDates.length === 2) {
          return hasRoomSelectedDates(room, selectedDates);
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
    <div className="rooms">
      {!filteredRooms.length && (
        <div className="rooms__error-message">
          нет комнат, соответствующих параметрам поиска
        </div>
      )}
      <div className="rooms__container">
        {filteredRooms.slice(indexFrom, indexTo).map((room) => (
          <RoomCard
            key={room.roomNumber}
            id={String(room.roomNumber)}
            roomNumber={room.roomNumber}
            price={room.price}
            feedbackCount={Object.values(room.feedback ?? {}).length}
            rateNumber={getRating(room.rates)}
            imgsSrc={room.images}
          />
        ))}
      </div>
      {filteredRooms.length > ITEMS_PER_PAGE && (
        <div className="rooms__pagination-container">
          <Pagination
            totalRooms={filteredRooms.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPageNumber={currentPage}
            onClickPage={handlePaginationPageClick}
          />
        </div>
      )}
    </div>
  );
};

export { Rooms };
