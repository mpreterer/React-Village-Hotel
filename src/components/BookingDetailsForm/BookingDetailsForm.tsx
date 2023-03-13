import { FC, FormEvent } from 'react';

import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { Button } from '../Button/Button';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';

import { DAYS_DECLENSIONS } from './constants';
import './BookingDetailsForm.scss';

const extraServices = 300;
const discountServices = 2179;
type Props = {
  price: number;
  roomNumber: number;
  isLux: boolean;
  totalAmount: number;
  days: number;
  dates: {
    from: string;
    to: string;
  };
  onSubmit?: () => void;
};

const BookingDetailsForm: FC<Props> = ({
  price,
  roomNumber,
  isLux,
  totalAmount,
  days,
  dates,
  onSubmit,
}) => {
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.();
  };
  return (
    <form onSubmit={handleFormSubmit} className="booking-details-form">
      <div className="booking-details-form__about">
        <CardHeaderInfo isLux={isLux} roomNumber={roomNumber} isLarge />
      </div>

      <div className="booking-details-form__services">
        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-text">
            {`с ${dates.from} по ${dates.to} `}
          </p>
        </div>
        <span className="booking-details-form__services-price">
          {`${days} ${getWordDeclension(days, DAYS_DECLENSIONS)}`}
        </span>

        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-text">
            {`${moneyFormat.to(price)} в сутки на день бронирования`}
          </p>
        </div>
        <span className="booking-details-form__services-price" />

        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-text">
            {`${moneyFormat.to(price)} x ${days} ${getWordDeclension(
              days,
              DAYS_DECLENSIONS
            )} `}
          </p>
        </div>
        <span className="booking-details-form__services-price">
          {moneyFormat.to(price * days)}
        </span>

        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-text">Гостей</p>
        </div>
        <span className="booking-details-form__services-price" />

        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-description-text">
            Скидка
          </p>
        </div>
        <span className="booking-details-form__services-price">
          {moneyFormat.to(discountServices)}
        </span>
        <div className="booking-details-form__services-descriptions">
          <p className="booking-details-form__services-text">
            Дополнительные услуги
          </p>
        </div>
        <span className="booking-details-form__services-price">
          {moneyFormat.to(extraServices)}
        </span>
      </div>
      <div className="booking-details-form__result">
        Итого
        <span className="booking-details-form__result-line" />
        <span className="booking-details-form__result-price">
          {moneyFormat.to(totalAmount)}
        </span>
      </div>

      <Button withBackground text="закрыть" onClick={handleFormSubmit} />
    </form>
  );
};

export { BookingDetailsForm };
