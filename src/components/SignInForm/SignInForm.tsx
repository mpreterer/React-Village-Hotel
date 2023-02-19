import { FC, FormEvent } from 'react';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import './SignInForm.scss';

const SignInForm: FC = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="sign-in-form">
      <h1 className="sign-in-form__title">Войти</h1>
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

export { SignInForm };
