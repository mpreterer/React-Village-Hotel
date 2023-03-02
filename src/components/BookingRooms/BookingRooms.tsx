import { FC, useState } from 'react';

import { ITEMS_PER_PAGE } from '../../shared/constants/paginationItems';
import { RoomData } from '../../types/RoomData';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { RoomBookingCard } from '../RoomBookingCard/RoomBookingCard';
import { Tabs } from '../Tabs/Tabs';

import { TABS_BUTTONS_DATA } from './constants';
import './BookingRooms.scss';

type Props = {
  rooms: RoomData[];
  status: string;
};

const BookingRooms: FC<Props> = ({ rooms, status }) => {
  const [filter, setFilter] = useState('все');
  const [page, setPage] = useState(1);

  const handlePaginationPageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleTabsOnChange = (name: string) => {
    setFilter(name);
  };

  const filteredRooms =
    filter === 'все'
      ? rooms
      : rooms.filter((room) => {
          const { from, to } = room.reservedDates[0];
          const correctFromDate = from.split('.').reverse().join('.');
          const correctToDate = to.split('.').reverse().join('.');
          const currentDate = new Date('2023.02.23');

          if (filter === 'прошедшие') {
            if (currentDate >= new Date(correctToDate)) {
              return room;
            }
          }

          if (filter === 'текущие') {
            if (
              currentDate >= new Date(correctFromDate) &&
              currentDate < new Date(correctToDate)
            ) {
              return room;
            }
          }

          return false;
        });

  const indexFrom = (page - 1) * ITEMS_PER_PAGE;
  const indexTo = page * ITEMS_PER_PAGE;

  return (
    <div className="booking-rooms">
      <div className="booking-rooms__header">
        <h3 className="booking-rooms__header-title">Забронированные номера</h3>
        <div className="booking-rooms__header-tabs">
          <Tabs items={TABS_BUTTONS_DATA} onChange={handleTabsOnChange} />
        </div>
      </div>
      {status === 'loading' && (
        <div className="booking-rooms__loader">
          <Loader />
        </div>
      )}
      {status === 'rejected' && (
        <h3 className="booking-rooms__error-message">
          Произошла ошибка, необходимо перезагрузить страницу
        </h3>
      )}
      {status === 'resolved' && (
        <>
          <div className="booking-rooms__rooms">
            {filteredRooms.slice(indexFrom, indexTo).map((room) => (
              <RoomBookingCard
                key={room.roomNumber}
                id={String(room.roomNumber)}
                roomNumber={room.roomNumber}
                price={room.price}
                reviewsCount={room.reviewsCount}
                rateNumber={room.rating}
                imgsSrc={room.images}
                totalCost={0}
                bookingStatus
                isLux={room.isLux}
              />
            ))}
          </div>
          {rooms.length > ITEMS_PER_PAGE && (
            <div className="booking-rooms__pagination">
              <Pagination
                totalRooms={rooms.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPageNumber={page}
                onClickPage={handlePaginationPageClick}
              />
            </div>
          )}
          <div className="booking-rooms__bookings">
            <p className="booking-rooms__bookings-title">Подтверждено броней</p>
            <h3 className="booking-rooms__bookings-count">
              {`7 / ${rooms.length}`}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export { BookingRooms };
