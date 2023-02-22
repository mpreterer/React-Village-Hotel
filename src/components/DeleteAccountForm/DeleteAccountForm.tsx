import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { DeleteAccountFormNames } from './constants';
import { DeleteAccountFormSchema } from './helpers';
import './DeleteAccountForm.scss';

type FormValues = {
  [DeleteAccountFormNames.Email]: string;
  [DeleteAccountFormNames.Password]: string;
};

const DeleteAccountForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { submitCount, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(DeleteAccountFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('форма успешно прошла валидацию');
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="delete-account-form"
    >
      <h1 className="delete-account-form__title">Удалить аккаунт</h1>
      <div className="delete-account-form__field">
        <Controller
          name={DeleteAccountFormNames.Email}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              title="Email"
              placeholder="Email"
              isInvalid={fieldState.invalid}
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="delete-account-form__field">
        <Controller
          name={DeleteAccountFormNames.Password}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              title="Пароль"
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
      </div>
      <SubmitButton
        disabled={!!submitCount && !isValid}
        text="удалить аккаунт"
      />
    </form>
  );
};

export { DeleteAccountForm };
