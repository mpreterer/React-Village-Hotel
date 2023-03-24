import { FC, FormEvent, useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPromiseAlert, updatePromiseAlert } from '../../libs/toastify';
import { SCREENS } from '../../routes/endpoints';
import { getFormattedDate } from '../../shared/helpers/getFormattedDate/getFormattedDate';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import {
  errorMessageSelect,
  statusSelect,
} from '../../store/slices/booking/selectors';
import { makeBooking } from '../../store/slices/booking/slice';
import { filtersActions } from '../../store/slices/filters/slice';
import { DropdownGuestsItemData } from '../../types/DropdownItemData';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { BOOKING_FORM_TOAST_ID, DAYS_DECLINATIONS } from './constants';
import { getDaysBetweenDate } from './helpers';
import './BookingForm.scss';

const services = 0;
const extraServices = 300;
const discountServices = 2179;
type Props = {
  price: number;
  roomNumber: number;
  selectedDate: Date[];
  guestItems: DropdownGuestsItemData[];
  userId: string | null;
  sequenceNumber: number;
  isLux?: boolean;
};

const BookingForm: FC<Props> = ({
  price,
  roomNumber,
  selectedDate,
  guestItems,
  userId,
  sequenceNumber,
  isLux = false,
}) => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(statusSelect);
  const bookingError = useAppSelector(errorMessageSelect);

  const days = getDaysBetweenDate(selectedDate);

  const datesRange = getFormattedDate(selectedDate, true);

  useEffect(() => {
    switch (status) {
      case 'loading':
        setPromiseAlert(BOOKING_FORM_TOAST_ID, 'Бронирование...');
        break;
      case 'resolved':
        updatePromiseAlert(
          BOOKING_FORM_TOAST_ID,
          'success',
          'Бронирование подтверждено'
        );
        break;
      default:
        if (bookingError)
          updatePromiseAlert(BOOKING_FORM_TOAST_ID, 'error', bookingError);
    }
  }, [bookingError, status]);

  const adultsAmount = guestItems.find((item) => item.id === 'adults');
  const isBookingAllowed =
    adultsAmount?.amount && selectedDate.length && status !== 'loading';

  const totalAmount = Math.max(
    0,
    price * days - discountServices - services + extraServices
  );

  const handleDateDropdownOnSelect = useCallback(
    (date: Date[]) => {
      dispatch(filtersActions.updateSelectedDate(date));
    },
    [dispatch]
  );

  const handleDropdownOnSelect = useCallback(
    (people: DropdownGuestsItemData[]) => {
      dispatch(filtersActions.updateCapacity(people));
    },
    [dispatch]
  );

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (userId && sequenceNumber !== -1) {
      dispatch(
        makeBooking({
          roomNumber,
          userId,
          discount: discountServices,
          additionalService: extraServices,
          totalAmount,
          dates: { from: datesRange[0], to: datesRange[1] },
          guests: guestItems,
          sequenceNumber,
        })
      );
    }
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
          selectedDates={selectedDate}
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
          {moneyFormat.to(services - discountServices)}
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
      {userId ? (
        <SubmitButton disabled={!isBookingAllowed} text="забронировать" />
      ) : (
        <ButtonLink text="зарегистрироваться" href={SCREENS.SIGN_UP} isSmall />
      )}
    </form>
  );
};

export { BookingForm };
