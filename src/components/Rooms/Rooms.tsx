import { FC } from 'react';
import { useSelector } from 'react-redux';

import {
  activePageNumberSelect,
  roomsSelect,
  statusSelect,
} from '../../store/slices/rooms/selectors';
import { Pagination } from '../Pagination/Pagination';
import { RoomCard } from '../RoomCard/RoomCard';

import './Rooms.scss';

const Rooms: FC = () => {
  const itemsPerPage = 12;

  const rooms = useSelector(roomsSelect);
  const currentPage = useSelector(activePageNumberSelect);
  const status = useSelector(statusSelect);

  const indexFrom = (currentPage - 1) * itemsPerPage;
  const indexTo = currentPage * itemsPerPage;

  return (
    <div className="rooms">
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
          {!!(rooms.length > itemsPerPage) && (
            <div className="rooms__pagination-container">
              <Pagination itemsPerPage={itemsPerPage} />
            </div>
          )}
        </>
      )}

      {(!rooms.length || status === 'rejected') && (
        <div className="rooms__error-message">комнаты не найдены</div>
      )}
      {status === 'loading' && <div className="rooms__loader" />}
    </div>
  );
};

export { Rooms };
