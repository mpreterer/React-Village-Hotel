import { FC, useEffect, useRef, useState } from 'react';

import {
  ITEMS_PER_PAGE,
  ITEMS_PER_PAGE_MEDIUM,
} from '../../shared/constants/paginationItems';
import { WindowSizes } from '../../shared/constants/WindowSizes';
import { throttle } from '../../shared/helpers/throttle/throttle';
import { RoomData } from '../../types/RoomData';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { RoomBookingCard } from '../RoomBookingCard/RoomBookingCard';
import { Tabs } from '../Tabs/Tabs';

import { TABS_BUTTONS_DATA, TabsProfileId } from './constants';
import './BookingRooms.scss';

type Props = {
  rooms: RoomData[];
  status: string;
};

const BookingRooms: FC<Props> = ({ rooms, status }) => {
  const bookingRoomsHeaderRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(TabsProfileId.ALL);
  const [page, setPage] = useState(1);
  const [roomsPerPage, setRoomsPerPage] = useState(
    document.documentElement.clientWidth <= WindowSizes.Medium
      ? ITEMS_PER_PAGE_MEDIUM
      : ITEMS_PER_PAGE
  );

  const scrollToBookingRooms = () => {
    window.scrollTo(0, Number(bookingRoomsHeaderRef.current?.scrollHeight));
  };

  const handlePaginationPageClick = (pageNumber: number) => {
    setPage(pageNumber);
    setTimeout(() => scrollToBookingRooms(), 0);
  };

  const handleTabsOnChange = (id: TabsProfileId) => {
    setFilter(id);
    setPage(1);
  };

  useEffect(() => {
    let roomPerPageIsChanged =
      document.documentElement.clientWidth <= WindowSizes.Medium;

    const handleWindowResize = () => {
      if (document.documentElement.clientWidth <= WindowSizes.Medium) {
        setRoomsPerPage(ITEMS_PER_PAGE_MEDIUM);

        if (!roomPerPageIsChanged) {
          setPage(page * 2 - 1);
          roomPerPageIsChanged = true;
        }
      } else {
        setRoomsPerPage(ITEMS_PER_PAGE);

        if (roomPerPageIsChanged) {
          setPage(Math.ceil(page / 2));
          roomPerPageIsChanged = false;
        }
      }
    };

    const throttledHandleWindowResize = throttle(handleWindowResize, 250);

    window.addEventListener('resize', throttledHandleWindowResize);

    return () => {
      window.removeEventListener('resize', throttledHandleWindowResize);
    };
  }, [page]);

  const filteredRooms =
    filter === TabsProfileId.ALL
      ? rooms
      : rooms.filter((room) => {
          const { from, to } = room.reservedDates[0];
          const dateFrom = new Date(from.split('.').reverse().join('.'));
          const dateTo = new Date(to.split('.').reverse().join('.'));
          const currentDate = new Date('2023.02.23');

          if (filter === TabsProfileId.PAST) {
            if (currentDate >= dateTo) {
              return room;
            }
          }

          if (filter === TabsProfileId.CURRENT) {
            if (currentDate >= dateFrom && currentDate < dateTo) {
              return room;
            }
          }

          return false;
        });

  const indexFrom = (page - 1) * roomsPerPage;
  const indexTo = page * roomsPerPage;

  return (
    <div className="booking-rooms">
      <div className="booking-rooms__header" ref={bookingRoomsHeaderRef}>
        <h3 className="booking-rooms__header-title">Забронированные номера</h3>
        <div className="booking-rooms__header-tabs">
          <Tabs
            items={TABS_BUTTONS_DATA}
            activeItem={filter}
            onChange={handleTabsOnChange}
          />
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
            {filteredRooms
              .slice(indexFrom, indexTo)
              .map(
                ({
                  roomNumber,
                  price,
                  reviewsCount,
                  rating,
                  images,
                  isLux,
                }) => (
                  <RoomBookingCard
                    key={roomNumber}
                    id={String(roomNumber)}
                    roomNumber={roomNumber}
                    price={price}
                    reviewsCount={reviewsCount}
                    rateNumber={rating}
                    imgsSrc={images}
                    totalCost={0}
                    bookingStatus
                    isLux={isLux}
                  />
                )
              )}
          </div>
          <div className="booking-rooms__bookings">
            <p className="booking-rooms__bookings-title">Подтверждено броней</p>
            <h3 className="booking-rooms__bookings-count">
              {`7 / ${filteredRooms.length}`}
            </h3>
          </div>
          {filteredRooms.length > roomsPerPage && (
            <div className="booking-rooms__pagination">
              <Pagination
                totalRooms={filteredRooms.length}
                itemsPerPage={roomsPerPage}
                text="забронированных номеров"
                currentPageNumber={page}
                onClickPage={handlePaginationPageClick}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { BookingRooms };
