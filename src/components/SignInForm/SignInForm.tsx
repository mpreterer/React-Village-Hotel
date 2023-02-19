import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SCREENS } from '../../routes/endpoints';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import './SignInForm.scss';

const SearchRoomForm: FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* надо возвращаться на тот экран,
    на котором п-ль был, когда нажал кнопку [Войти] */
    navigate(SCREENS.LANDING);
  };

  return (
    <form onSubmit={handleFormSubmit} className="sign-in-form">
      <h1 className="sign-in__title">Войти</h1>
      <fieldset className="sign-in-form__fields">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Пароль" type="password" name="password" />
      </fieldset>
      <div className="sign-in-form__submit-button">
        <SubmitButton text="войти" />
      </div>
      <div className="sign-in-form__info">
        <p className="sign-in-form__text">Нет аккаунта на Toxin?</p>
        <div className="sign-in-form__link">
          <ButtonLink
            href="/mock-address/change-me"
            text="создать"
            withBorder
          />
        </div>
      </div>
    </form>
  );
};

export { SearchRoomForm };
