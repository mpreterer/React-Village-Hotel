import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPromiseAlert, updatePromiseAlert } from '../../libs/toastify';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { userIdSelect } from '../../store/slices/auth/selectors';
import {
  cancelBookingStatusSelect,
  errorMessageSelect,
} from '../../store/slices/profile/selectors';
import { removeUserBooking } from '../../store/slices/profile/slice';
import { Button } from '../Button/Button';
import { Props as RoomCardProps, RoomCard } from '../RoomCard/RoomCard';

import './RoomBookingCard.scss';

type RoomBookingProps = {
  totalAmount?: number;
  bookingStatus?: boolean;
  bookingId?: string;
};

export type Props = RoomCardProps & RoomBookingProps;

const RoomBookingCard: FC<Props> = ({
  id,
  roomNumber,
  price,
  reviewsCount,
  imgsSrc,
  rateNumber,
  bookingId = '',
  totalAmount = 0,
  bookingStatus = false,
  isLux = false,
}) => {
  const userId = String(useSelector(userIdSelect));
  const dispatch = useAppDispatch();
  const cancelBookingStatus = useAppSelector(cancelBookingStatusSelect);
  const errorMessage = useAppSelector(errorMessageSelect);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    switch (cancelBookingStatus) {
      case 'loading':
        setPromiseAlert('Отмена брони...');
        break;
      case 'resolved':
        updatePromiseAlert('success', 'Бронирование отменено');
        break;
      default:
        if (errorMessage) updatePromiseAlert('error', errorMessage);
    }
  }, [errorMessage, cancelBookingStatus]);

  const handleCancelClick = async () => {
    setDisabledButton(true);

    await dispatch(
      removeUserBooking({ userId, roomId: bookingId, roomNumber })
    );

    setDisabledButton(false);
  };

  return (
    <div className="room-booking-card">
      <div className="room-booking-card__room-card">
        <RoomCard
          key={roomNumber}
          id={id}
          roomNumber={roomNumber}
          price={price}
          reviewsCount={reviewsCount}
          rateNumber={rateNumber}
          imgsSrc={imgsSrc}
          isLux={isLux}
        />
      </div>
      <div className="room-booking-card__about-booking">
        <div className="room-booking-card__payment-booking">
          <div className="room-booking-card__total-cost-info">
            <div className="room-booking-card__total-cost-title">
              Общая стоимость
            </div>
            <div className="room-booking-card__total-cost">
              {moneyFormat.to(totalAmount)}
            </div>
          </div>
          <div
            className={classNames(
              'room-booking-card__payment-status',
              'material-icons-outlined',
              {
                'room-booking-card__payment-status_confirmed': bookingStatus,
                'room-booking-card__payment-status_rejected': !bookingStatus,
              }
            )}
          >
            {bookingStatus ? 'check_circle' : 'cancel'}
            <div
              className={classNames('room-booking-card__payment-status-tab', {
                'room-booking-card__payment-status-tab_confirmed':
                  bookingStatus,
                'room-booking-card__payment-status-tab_rejected':
                  !bookingStatus,
              })}
            >
              {bookingStatus
                ? 'Бронирование подтверждено'
                : 'Бронирование не подтверждено'}
            </div>
          </div>
        </div>
        <div className="room-booking-card__buttons-reservation">
          <div className="room-booking-card__button-container">
            <Button withBackground text="Подробнее" />
          </div>
          <div className="room-booking-card__button-container">
            <Button
              withBorder
              text="Отмена"
              onClick={() => handleCancelClick()}
              disabled={disabledButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RoomBookingCard };
