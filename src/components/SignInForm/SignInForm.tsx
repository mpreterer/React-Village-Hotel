import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { SignInFormNames } from './constants';
import { SignInFormSchema } from './helpers';
import './SignInForm.scss';

type FormValues = {
  [SignInFormNames.Email]: string;
  [SignInFormNames.Password]: string;
};

const SignInForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { submitCount, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('форма успешно прошла валидацию');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="sign-in-form">
      <h1 className="sign-in-form__title">Войти</h1>
      <fieldset className="sign-in-form__fields">
        <Controller
          name={SignInFormNames.Email}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Email"
              name={field.name}
              isInvalid={fieldState.invalid}
              value={field.value}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name={SignInFormNames.Password}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Пароль"
              type="password"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </fieldset>
      <div className="sign-in-form__submit-button">
        <SubmitButton disabled={!!submitCount && !isValid} text="войти" />
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
