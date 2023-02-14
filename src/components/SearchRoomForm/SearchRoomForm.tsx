import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SCREENS } from '../../routes/endpoints';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { DROPDOWN_ITEMS } from './constants';
import './SearchRoomForm.scss';

const SearchRoomForm: FC = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(SCREENS.SEARCH_ROOMS);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-rooms-form">
      <h1 className="search-rooms-form__title">
        Найдём номера под ваши пожелания
      </h1>
      <div className="search-rooms-form__calendar">
        <DateDropdown hasTwoInputs />
      </div>
      <div className="search-rooms-form__dropdown">
        <DropdownGuests items={DROPDOWN_ITEMS} />
      </div>
      <SubmitButton text="подобрать номер" />
    </form>
  );
};

export { SearchRoomForm };
