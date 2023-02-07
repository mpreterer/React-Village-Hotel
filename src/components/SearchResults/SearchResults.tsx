import { FC } from 'react';
import { useSelector } from 'react-redux';

import { roomCardsToDisplay } from '../../store/slices/rooms/selectors';
import { RoomCard } from '../RoomCard/RoomCard';

import './SearchResults.scss';

const SearchResults: FC = () => {
  const rooms = useSelector(roomCardsToDisplay);
  return (
    <div className="search-results">
      {rooms.map((room) => {
        const [roomNumber, roomData] = room;
        const { price, reviewsCount, rating, images } = roomData;
        return (
          <div className="search-results__room-container" key={roomNumber}>
            <RoomCard
              id={roomNumber}
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
  );
};

export { SearchResults };
