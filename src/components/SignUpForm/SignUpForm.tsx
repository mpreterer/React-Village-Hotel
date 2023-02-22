import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { Radio } from '../Radio/Radio';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { Toggle } from '../Toggle/Toggle';

import { Genders, SignUpFormNames } from './constants';
import { signUpFormSchema } from './helpers';
import './SignUpForm.scss';

type FormValues = {
  [SignUpFormNames.Name]: string;
  [SignUpFormNames.Surname]: string;
  [SignUpFormNames.Gender]: Genders.Man | Genders.Woman;
  [SignUpFormNames.Birthdate]: string;
  [SignUpFormNames.Email]: string;
  [SignUpFormNames.Password]: string;
  [SignUpFormNames.Special]: boolean;
};

const SignUpForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { submitCount, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      gender: Genders.Man,
    },
    resolver: yupResolver(signUpFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('форма успешно прошла валидацию');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="sign-up-form">
      <h1 className="sign-up-form__title">Регистрация аккаунта</h1>
      <div className="sign-up-form__fields">
        <Controller
          name={SignUpFormNames.Name}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Имя"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name={SignUpFormNames.Surname}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Фамилия"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="sign-up-form__radios">
        <Controller
          name={SignUpFormNames.Gender}
          control={control}
          render={({ field }) => (
            <Radio
              text="Мужчина"
              isChecked={field.value === Genders.Man}
              name={field.name}
              value={Genders.Man}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name={SignUpFormNames.Gender}
          control={control}
          render={({ field }) => (
            <Radio
              text="Женщина"
              isChecked={field.value === Genders.Woman}
              name={field.name}
              value={Genders.Woman}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className="sign-up-form__birth-field">
        <Controller
          name={SignUpFormNames.Birthdate}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isInvalid={fieldState.invalid}
              placeholder="ДД.ММ.ГГГГ"
              title="дата рождения"
              hasDateMask
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="sign-up-form__fields">
        <Controller
          name={SignUpFormNames.Email}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isInvalid={fieldState.invalid}
              title="данные для входа в сервис"
              placeholder="Email"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name={SignUpFormNames.Password}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isInvalid={fieldState.invalid}
              type="password"
              placeholder="Пароль"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="sign-up-form__toggle">
        <Controller
          name={SignUpFormNames.Special}
          control={control}
          render={({ field }) => (
            <Toggle
              text="Получать спецпредложения"
              name={field.name}
              isChecked={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className="sign-up-form__submit-button">
        <SubmitButton
          disabled={!!submitCount && !isValid}
          text="зарегистрироваться"
        />
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
