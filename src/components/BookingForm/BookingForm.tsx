/* eslint-disable @typescript-eslint/no-floating-promises */
import { FC, FormEvent, useCallback, useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { getFormattedDate } from '../../shared/helpers/getFormattedDate/getFormattedDate';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { bookRoom } from '../../store/slices/user/slice';
import { DropdownGuestsItemData } from '../../types/DropdownItemData';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { DAYS_DECLINATIONS } from './constants';
import { getDaysBetweenDate } from './helpers';
import './BookingForm.scss';

const services = 0;
const extraServices = 300;
const discountServices = 2179;
type Props = {
  price: number;
  roomNumber: number;
  isLux: boolean;
  selectedDate: Date[];
  guestItems: DropdownGuestsItemData[];
  userId: string | null;
};

const BookingForm: FC<Props> = ({
  price,
  roomNumber,
  isLux,
  selectedDate,
  guestItems,
  userId,
}) => {
  const dispatch = useAppDispatch();
  const [days, setDays] = useState(getDaysBetweenDate(selectedDate));
  const [dates, setDates] = useState<{ from: string; to: string }>({
    from: '',
    to: '',
  });
  const [guests, setGuests] = useState<
    { id: string; name: string; amount: number }[]
  >([]);

  const totalAmount = Math.max(
    0,
    price * days - discountServices - services + extraServices
  );

  const handleDateDropdownOnSelect = useCallback((date: Date[]) => {
    const datesRange = getFormattedDate(date, true);
    setDates({
      from: datesRange[0],
      to: datesRange[1],
    });
    setDays(getDaysBetweenDate(date));
  }, []);

  const handleDropdownOnSelect = useCallback(
    (people: { id: string; name: string; amount: number }[]) => {
      setGuests(people);
    },
    []
  );

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (userId)
      dispatch(
        bookRoom({
          roomNumber,
          userId,
          discount: 0,
          additionalService: false,
          totalAmount,
          dates,
          guests,
        })
      );
  };

  return (
    <form onSubmit={handleFormSubmit} className="booking-form">
      <div className="booking-form__about">
        <CardHeaderInfo
          isLux={isLux}
          price={price}
          roomNumber={roomNumber}
          isLarge
        />
      </div>
      <div className="booking-form__calendar">
        <DateDropdown
          hasTwoInputs
          initialDates={selectedDate}
          onSelect={handleDateDropdownOnSelect}
        />
      </div>
      <div className="booking-form__dropdown">
        <DropdownGuests items={guestItems} onChange={handleDropdownOnSelect} />
      </div>
      <div className="booking-form__services">
        <div className="booking-form__services-descriptions">
          <p className="booking-form__services-text">
            {`${moneyFormat.to(price)} x ${days} ${getWordDeclension(
              days,
              DAYS_DECLINATIONS
            )} `}
          </p>
        </div>
        <span className="booking-form__services-price">
          {moneyFormat.to(price * days)}
        </span>
        <div className="booking-form__services-descriptions">
          <p className="booking-form__services-description-text">
            Сбор за услуги: скидка {moneyFormat.to(discountServices)}
          </p>
          <button
            title="Услуги"
            type="button"
            className="booking-form__services-info-button"
          >
            i
          </button>
        </div>
        <span className="booking-form__services-price">
          {moneyFormat.to(services)}
        </span>
        <div className="booking-form__services-descriptions">
          <p className="booking-form__services-text">
            Сбор за дополнительные услуги
          </p>
          <button
            title="Услуги"
            type="button"
            className="booking-form__services-info-button"
          >
            i
          </button>
        </div>
        <span className="booking-form__services-price">
          {moneyFormat.to(extraServices)}
        </span>
      </div>
      <div className="booking-form__result">
        Итого
        <span className="booking-form__result-line" />
        <span className="booking-form__result-price">
          {moneyFormat.to(totalAmount)}
        </span>
      </div>
      <SubmitButton disabled={days === 0} text="забронировать" />
    </form>
  );
};

export { BookingForm };
