import { FC, useState } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchResults } from '../../components/SearchResults/SearchResults';

import { rooms } from './utils/rooms';
import './SearchRooms.scss';

const SearchRooms: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const onSelectPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const itemsPerPage = 12;

  const indexFrom = currentPage ? (currentPage - 1) * itemsPerPage : 0;
  const indexTo = currentPage ? currentPage * itemsPerPage : itemsPerPage;

  return (
    <div className="search-rooms">
      <div className="search-rooms__filters-container">
        <Filters />
      </div>
      <div className="search-rooms__rooms-container">
        <h2 className="search-rooms__title">
          Номера, которые мы для вас подобрали
        </h2>
        <SearchResults
          rooms={Object.entries(rooms).slice(indexFrom, indexTo)}
        />
        <div className="search-rooms__pagination-container">
          <Pagination
            totalItems={Object.entries(rooms).length}
            itemsPerPage={itemsPerPage}
            onSelectPage={onSelectPage}
          />
        </div>
      </div>
    </div>
  );
};

export { SearchRooms };
