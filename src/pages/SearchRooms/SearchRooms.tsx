import { FC, useEffect } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Loader } from '../../components/Loader/Loader';
import { Rooms } from '../../components/Rooms/Rooms';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { roomsSelect, statusSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
  const rooms = useAppSelector(roomsSelect);
  const status = useAppSelector(statusSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [dispatch, rooms]);

  return (
    <div className="search-rooms">
      {status === 'loading' && (
        <div className="search-rooms__loader">
          <Loader />
        </div>
      )}
      {status === 'rejected' && (
        <div className="search-rooms__error-message">
          произошла ошибка, повторите попытку позже
        </div>
      )}
      {status === 'resolved' && (
        <>
          <div className="search-rooms__filters-container">
            <Filters />
          </div>
          <div className="search-rooms__rooms-container">
            <h2 className="search-rooms__title">
              Номера, которые мы для вас подобрали
            </h2>
            <Rooms />
          </div>
        </>
      )}
    </div>
  );
};

export { SearchRooms };
