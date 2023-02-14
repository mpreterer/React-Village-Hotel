import { FC, FormEvent, useCallback, useState } from 'react';

import { GUEST_DECLENSIONS } from '../../shared/constants/dropdownDeclensions';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { DropdownItemData } from '../../types/DropdownItemData';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { DAYS_DECLINATIONS } from './constants';
import { getDaysBetweenDate } from './helpers';
import './BookingForm.scss';

const price = 9990;
const services = 0;
const roomNumber = 888;
const extraServices = 300;
const discountServices = 2179;
const guestItems: DropdownItemData[] = [
  { id: 'adults', name: 'Взрослые', amount: 2, maxValue: 10 },
  { id: 'children', name: 'Дети', amount: 1, maxValue: 10 },
  { id: 'babies', name: 'Младенцы', amount: 1, maxValue: 10 },
];

const isLux = true;
const selectedDate: Date[] = [];

const BookingForm: FC = () => {
  const [days, setDays] = useState(getDaysBetweenDate(selectedDate));

  const totalAmount = Math.max(
    0,
    price * days - discountServices - services + extraServices
  );

  const handleDropdownOnSelect = useCallback((date: Date[]) => {
    setDays(getDaysBetweenDate(date));
  }, []);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
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
          onSelect={handleDropdownOnSelect}
        />
      </div>
      <div className="booking-form__dropdown">
        <Dropdown
          declensions={GUEST_DECLENSIONS}
          placeholder="Сколько гостей?"
          title="гости"
          items={guestItems}
          dropdownType="guests"
        />
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
