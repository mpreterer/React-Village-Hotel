/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Filters } from '../../components/Filters/Filters';
import { Rooms } from '../../components/Rooms/Rooms';
import { useAppDispatch } from '../../hooks/redux';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
  const rooms = useSelector(roomsSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
  }, [dispatch, rooms.length]);

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
