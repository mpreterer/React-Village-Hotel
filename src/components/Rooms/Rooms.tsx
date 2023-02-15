/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/redux';
import {
  activePageNumberSelect,
  roomsAmountSelect,
  roomsSelect,
  statusSelect,
} from '../../store/slices/rooms/selectors';
import {
  fetchRooms,
  setActivePageNumber,
} from '../../store/slices/rooms/slice';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { RoomCard } from '../RoomCard/RoomCard';

import { ITEMS_PER_PAGE } from './constants';
import './Rooms.scss';

const Rooms: FC = () => {
  const activePageNumber = useSelector(activePageNumberSelect);
  const rooms = useSelector(roomsSelect);
  const roomsAmount = useSelector(roomsAmountSelect);
  const status = useSelector(statusSelect);

  const dispatch = useAppDispatch();

  const onSetActivePageNumber = useCallback(
    (pageNumber: number) => dispatch(setActivePageNumber(pageNumber)),
    [dispatch]
  );

  useEffect(() => {
    if (rooms.length === 0) dispatch(fetchRooms());
  }, [dispatch, rooms.length]);

  const indexFrom = (activePageNumber - 1) * ITEMS_PER_PAGE;
  const indexTo = activePageNumber * ITEMS_PER_PAGE;

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
              const { roomNumber, price, reviewsCount, rating, images, isLux } =
                room;
              return (
                <RoomCard
                  key={roomNumber}
                  id={String(roomNumber)}
                  roomNumber={Number(roomNumber)}
                  price={price}
                  reviewsCount={reviewsCount}
                  rateNumber={rating}
                  imgsSrc={images}
                  isLux={isLux}
                />
              );
            })}
          </div>
          {rooms.length > ITEMS_PER_PAGE && (
            <div className="rooms__pagination-container">
              <Pagination
                itemsPerPage={ITEMS_PER_PAGE}
                activePageNumber={activePageNumber}
                roomsAmount={roomsAmount}
                onSetActivePageNumber={onSetActivePageNumber}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { Rooms };
