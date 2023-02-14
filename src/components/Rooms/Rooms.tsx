/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/redux';
import {
  activePageNumberSelect,
  roomsSelect,
  statusSelect,
} from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { RoomCard } from '../RoomCard/RoomCard';

import { ITEMS_PER_PAGE } from './constants';
import './Rooms.scss';

const Rooms: FC = () => {
  const rooms = useSelector(roomsSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
  }, [dispatch, rooms.length]);

  const currentPage = useSelector(activePageNumberSelect);
  const status = useSelector(statusSelect);

  const indexFrom = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexTo = currentPage * ITEMS_PER_PAGE;

  return (
    <div className="rooms">
      {status === 'loading' && (
        <div className="rooms__loader">
          <Loader />
        </div>
      )}
      {status === 'rejected' && (
        <div className="rooms__error-message">
          произошла ошибка, повторите попытку позже
        </div>
      )}
      {status === 'resolved' && !rooms.length && (
        <div className="rooms__error-message">
          нет комнат, соответствующих параметрам поиска
        </div>
      )}
      {!!rooms.length && (
        <>
          <div className="rooms__container">
            {rooms.slice(indexFrom, indexTo).map((room) => {
              const { roomNumber, price, reviewsCount, rating, images } = room;
              return (
                <RoomCard
                  key={roomNumber}
                  id={String(roomNumber)}
                  roomNumber={Number(roomNumber)}
                  price={price}
                  reviewsCount={reviewsCount}
                  rateNumber={rating}
                  imgsSrc={images}
                />
              );
            })}
          </div>
          {rooms.length > ITEMS_PER_PAGE && (
            <div className="rooms__pagination-container">
              <Pagination itemsPerPage={ITEMS_PER_PAGE} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { Rooms };
