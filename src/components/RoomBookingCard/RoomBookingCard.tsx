import { FC } from 'react';
import classNames from 'classnames';

import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { Button } from '../Button/Button';
import { Props as RoomCardProps, RoomCard } from '../RoomCard/RoomCard';

import './RoomBookingCard.scss';

type RoomBookingProps = {
  totalCost: number;
  bookingStatus: boolean;
};

type Props = RoomCardProps & RoomBookingProps;

const RoomBookingCard: FC<Props> = ({
  id,
  roomNumber,
  price,
  reviewsCount,
  imgsSrc,
  rateNumber,
  totalCost,
  bookingStatus = false,
  isLux = false,
}) => {
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
              {moneyFormat.to(totalCost)}
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
            <Button withBorder text="Отмена" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RoomBookingCard };
