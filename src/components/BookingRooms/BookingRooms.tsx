import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/redux';
import { ITEMS_PER_PAGE } from '../../shared/constants/paginationItems';
import {
  activePageNumberSelect,
  roomsSelect,
} from '../../store/slices/rooms/selectors';
import { setActivePageNumber } from '../../store/slices/rooms/slice';
import { Pagination } from '../Pagination/Pagination';
import { RoomBookingCard } from '../RoomBookingCard/RoomBookingCard';

import './BookingRooms.scss';

const BookingRooms: FC = () => {
  const dispatch = useAppDispatch();
  const rooms = useSelector(roomsSelect);
  const currentPage = useSelector(activePageNumberSelect);

  const indexFrom = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexTo = currentPage * ITEMS_PER_PAGE;

  const handlePaginationPageClick = (pageNumber: number) => {
    dispatch(setActivePageNumber(pageNumber));
  };

  return (
    <div className="booking-rooms">
      <div className="booking-rooms__container">
        {rooms.slice(indexFrom, indexTo).map((room) => (
          <RoomBookingCard
            key={room.roomNumber}
            id={String(room.roomNumber)}
            roomNumber={room.roomNumber}
            price={room.price}
            feedbackCount={room.feedbackCount}
            rateNumber={room.rating}
            imgsSrc={room.images}
            totalCost={0}
            bookingStatus
            isLux={room.isLux}
          />
        ))}
      </div>
      {rooms.length > ITEMS_PER_PAGE && (
        <div className="booking-rooms__pagination-container">
          <Pagination
            totalRooms={180}
            currentPageNumber={1}
            itemsPerPage={ITEMS_PER_PAGE}
            onClickPage={handlePaginationPageClick}
          />
        </div>
      )}
    </div>
  );
};

export { BookingRooms };
