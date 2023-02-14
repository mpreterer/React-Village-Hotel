import { FC } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Rooms } from '../../components/Rooms/Rooms';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
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
