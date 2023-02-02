import { FC, useEffect, useState } from 'react';

import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';

import './SearchRooms.scss';

const SearchRooms: FC = () => {
  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   fetch('https://react-village-d5bce-default-rtdb.firebaseio.com/')
  //     .then((res) => res.json())
  //     .then((arr) => {
  //       setRooms(arr);
  //     });
  // }, []);

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
          {/* {rooms.map(() => (
          ))} */}
        </div>
        <div className="search-rooms__pagination-container">
          <Pagination totalItems={180} itemsPerPage={12} />
        </div>
      </div>
    </div>
  );
};

export { SearchRooms };
