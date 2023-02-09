import { FC } from 'react';
import { useSelector } from 'react-redux';

import { activePageNumber, rooms } from '../../store/slices/rooms/selectors';
import { Pagination } from '../Pagination/Pagination';
import { RoomCard } from '../RoomCard/RoomCard';

import './Rooms.scss';

const Rooms: FC = () => {
  const roomCards = useSelector(rooms);
  const itemsPerPage = 12;
  const currentPage = useSelector(activePageNumber);

  const indexFrom = currentPage ? (currentPage - 1) * itemsPerPage : 0;
  const indexTo = currentPage ? currentPage * itemsPerPage : itemsPerPage;

  return (
    <div className="rooms">
      <div className="rooms__container">
        {roomCards.slice(indexFrom, indexTo).map((room) => {
          const { roomNumber, price, reviewsCount, rating, images } = room;
          return (
            <div className="rooms__room-container" key={roomNumber}>
              <RoomCard
                id={String(roomNumber)}
                roomNumber={Number(roomNumber)}
                price={price}
                reviewsCount={reviewsCount}
                rateNumber={rating}
                imgsSrc={images}
              />
            </div>
          );
        })}
      </div>
      <div className="rooms__pagination-container">
        <Pagination itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export { Rooms };
