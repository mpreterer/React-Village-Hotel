import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { SCREENS } from '../../routes/endpoints';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { Radio } from '../Radio/Radio';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { Toggle } from '../Toggle/Toggle';

import './SignUpForm.scss';

const SignUpForm: FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(SCREENS.LANDING);
  };

  return (
    <form onSubmit={handleFormSubmit} className="sign-up-form">
      <h1 className="sign-up-form__title">Регистрация аккаунта</h1>
      <div className="sign-up-form__fields">
        <Input placeholder="Имя" name="name" />
        <Input placeholder="Фамилия" name="surname" />
      </div>
      <div className="sign-up-form__radios">
        <Radio text="Мужчина" isChecked name="gender" value="Мужчина" />
        <Radio text="Женщина" isChecked name="gender" value="Женщина" />
      </div>
      <div className="sign-up-form__birth-field">
        <Input
          placeholder="ДД.ММ.ГГГГ"
          title="дата рождения"
          hasDateMask
          name="birthdate"
        />
      </div>
      <div className="sign-up-form__fields">
        <Input
          type="email"
          title="данные для входа в сервис"
          placeholder="Email"
          name="email"
        />
        <Input placeholder="Пароль" type="password" name="password" />
      </div>
      <div className="sign-up-form__toggle">
        <Toggle text="Получать спецпредложения" />
      </div>
      <div className="sign-up-form__submit-button">
        <SubmitButton text="зарегистрироваться" />
      </div>
      <div className="sign-up-form__info">
        <p className="sign-up-form__text">Уже есть аккаунт на Toxin</p>
        <div className="sign-up-form__link">
          <ButtonLink href="/mock-address/change-me" text="Войти" withBorder />
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
