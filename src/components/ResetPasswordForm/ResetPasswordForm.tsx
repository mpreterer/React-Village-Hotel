import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { ResetPasswordFormNames } from './constants';
import { ResetPasswordFormSchema } from './helpers';
import './ResetPasswordForm.scss';

type FormValues = {
  [ResetPasswordFormNames.Password]: string;
  [ResetPasswordFormNames.NewPassword]: string;
  [ResetPasswordFormNames.PasswordConfirm]: string;
};

const ResetPasswordForm: FC = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(ResetPasswordFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('форма успешно прошла валидацию');
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="reset-password-form"
    >
      <h1 className="reset-password-form__title">Изменить пароль</h1>
      <div className="reset-password-form__field">
        <Controller
          name={ResetPasswordFormNames.Password}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              type="password"
              title="Старый пароль"
              placeholder="Пароль"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="reset-password-form__field">
        <Controller
          name={ResetPasswordFormNames.NewPassword}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              type="password"
              title="Новый пароль"
              placeholder="Новый пароль"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="reset-password-form__field">
        <Controller
          name={ResetPasswordFormNames.PasswordConfirm}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              type="password"
              title="Подтвердите новый пароль"
              placeholder="Новый пароль"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <SubmitButton text="Сохранить изменения" />
    </form>
  );
};

export { ResetPasswordForm };
