import { FC } from 'react';

import { RoomCard } from '../RoomCard/RoomCard';

import './SearchResults.scss';

type Props = {
  rooms: Array<
    [
      string,
      {
        furniture: Array<{ id: string; limit: number }>;
        availability: Array<{ id: string; limit: number }>;
        reservedDates: Array<{ from: string; to: string }>;
        details: {
          withTV?: boolean;
          withBabyBed?: boolean;
          withBabyChair?: boolean;
          withBreakfast?: boolean;
          withDesk?: boolean;
          withGuests?: boolean;
          withShampoo?: boolean;
          withWideHallway?: boolean;
          withAssistance?: boolean;
          withPets?: boolean;
          canSmoke?: boolean;
        };
        images: Array<string>;
        isLux: boolean;
        price: number;
        rating: number;
        reviewsCount: number;
      }
    ]
  >;
};

const SearchResults: FC<Props> = ({ rooms }) => {
  return (
    <div className="search-results">
      {rooms.map((room, i) => {
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
