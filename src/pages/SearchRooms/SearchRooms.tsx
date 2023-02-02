import { FC } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';
import { RoomCard } from '../../components/RoomCard/RoomCard';

import listRooms from './utils/rooms.json';
import './SearchRooms.scss';

const SearchRooms: FC = () => {
  type RoomKeyType = keyof typeof listRooms.rooms;

  return (
    <div className="search-rooms">
      <div className="search-rooms__filters-container">
        <Filters />
      </div>
      <div className="search-rooms__rooms-container">
        <h2 className="search-rooms__title">
          Номера, которые мы для вас подобрали
        </h2>
        <div className="search-rooms__rooms">
          {Object.keys(listRooms.rooms).map((room) => (
            <div className="search-rooms__room-container" key={room}>
              <RoomCard
                id={room}
                roomNumber={Number(room)}
                price={listRooms.rooms[room as RoomKeyType].price}
                reviewsCount={listRooms.rooms[room as RoomKeyType].reviewsCount}
                rateNumber={listRooms.rooms[room as RoomKeyType].rating}
                imgsSrc={listRooms.rooms[room as RoomKeyType].images}
              />
            </div>
          ))}
        </div>
        <div className="search-rooms__pagination-container">
          <Pagination totalItems={180} itemsPerPage={12} />
        </div>
      </div>
    </div>
  );
};

export { SearchRooms };
