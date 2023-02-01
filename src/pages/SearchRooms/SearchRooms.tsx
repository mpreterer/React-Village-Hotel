import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';

import './SearchRooms.scss';

const SearchRooms = () => {
  return (
    <div>
      <div className="search-rooms">
        <Filters />
      </div>
      <div className="search-room__rooms-container">
        <h2 className="search-room__number-for-user">
          Номера, которые мы для вас подобрали
        </h2>
        <div className="search-room__rooms" />
        <div className="search-room__pagination-container">
          <Pagination totalItems={180} itemsPerPage={12} />
        </div>
      </div>
    </div>
  );
};

export { SearchRooms };
