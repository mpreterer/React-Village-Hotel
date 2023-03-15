import { FC, FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SCREENS } from '../../routes/endpoints';
import { filterSelect } from '../../store/slices/filters/selectors';
import { filtersActions } from '../../store/slices/filters/slice';
import { DropdownGuestsItemData } from '../../types/DropdownItemData';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import './SearchRoomForm.scss';

const SearchRoomForm: FC = () => {
  const { capacity, selectedDates } = useAppSelector(filterSelect);
  const navigate = useNavigate();
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(SCREENS.SEARCH_ROOMS);
  };
  const dispatch = useAppDispatch();

  const handleDateDropdownSelect = useCallback(
    (date: Date[]) => {
      dispatch(filtersActions.updateSelectedDate(date));
    },
    [dispatch]
  );

  const handleGuestDropdownChange = (items: DropdownGuestsItemData[]) => {
    dispatch(filtersActions.updateCapacity(items));
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-rooms-form">
      <h1 className="search-rooms-form__title">
        Найдём номера под ваши пожелания
      </h1>
      <div className="search-rooms-form__calendar">
        <DateDropdown
          hasTwoInputs
          onSelect={handleDateDropdownSelect}
          initialDates={selectedDates}
        />
      </div>
      <div className="search-rooms-form__dropdown">
        <DropdownGuests
          items={capacity.items}
          onChange={handleGuestDropdownChange}
          guestsLimit={
            capacity.guestsLimit === 0 ? undefined : capacity.guestsLimit
          }
          babiesLimit={
            capacity.babiesLimit === 0 ? undefined : capacity.guestsLimit
          }
        />
      </div>
      <SubmitButton text="подобрать номер" />
    </form>
  );
};

export { SearchRoomForm };
