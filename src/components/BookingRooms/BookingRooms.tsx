import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ITEMS_PER_PAGE } from '../../shared/constants/paginationItems';
import {
  profileSelect,
  statusSelect,
} from '../../store/slices/profile/selectors';
import { activePageNumberSelect } from '../../store/slices/rooms/selectors';
import { setActivePageNumber } from '../../store/slices/rooms/slice';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { RoomBookingCard } from '../RoomBookingCard/RoomBookingCard';

import './BookingRooms.scss';

const BookingRooms: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(activePageNumberSelect);
  const bookedRooms = useAppSelector(profileSelect);
  const status = useAppSelector(statusSelect);

  const indexFrom = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexTo = currentPage * ITEMS_PER_PAGE;

  const handlePaginationPageClick = (pageNumber: number) => {
    dispatch(setActivePageNumber(pageNumber));
  };

  return (
    <div className="booking-rooms">
      {status === 'loading' && (
        <div className="booking-rooms__loader">
          <Loader />
        </div>
      )}
      {status === 'rejected' && !bookedRooms && (
        <div className="booking-rooms__error-message">
          Бронирования не найдены
        </div>
      )}
      {status === 'resolved' && bookedRooms && (
        <>
          <div className="booking-rooms__container">
            {bookedRooms.slice(indexFrom, indexTo).map((room, index) => (
              <RoomBookingCard
                key={String(room.bookingId)}
                id={String(room.roomNumber)}
                roomNumber={room.roomNumber}
                price={room.price}
                reviewsCount={room.reviewsCount}
                rateNumber={room.rating}
                imgsSrc={room.images}
                totalAmount={room.totalAmount}
                bookingStatus={room.bookingStatus}
                bookingId={String(room.bookingId)}
                isLux={room.isLux}
              />
            ))}
          </div>
          {bookedRooms.length > ITEMS_PER_PAGE && (
            <div className="booking-rooms__pagination-container">
              <Pagination
                totalRooms={180}
                itemsPerPage={ITEMS_PER_PAGE}
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
