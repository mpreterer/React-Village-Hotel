import { FC, useEffect } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Rooms } from '../../components/Rooms/Rooms';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filtersActions } from '../../store/slices/filters/slice';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
  const rooms = useAppSelector(roomsSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rooms.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchRooms());
    } else {
      dispatch(filtersActions.syncFilters(rooms));
    }
  }, [rooms, dispatch]);

  return (
    <div className="search-rooms">
      <div className="search-rooms__filters-container">
        <Filters />
      </div>
      <div className="search-rooms__rooms-container">
        <h2 className="search-rooms__title">
          Номера, которые мы для вас подобрали
        </h2>
        <Rooms />
      </div>
    </div>
  );
};

export { SearchRooms };
