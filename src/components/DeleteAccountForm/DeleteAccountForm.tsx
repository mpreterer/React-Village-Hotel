import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPromiseAlert, updatePromiseAlert } from '../../libs/toastify';
import { SCREENS } from '../../routes/endpoints';
import {
  authErrorSelect,
  authStatusSelect,
} from '../../store/slices/auth/selectors';
import { deleteAccount } from '../../store/slices/auth/slice';
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
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(authStatusSelect);
  const authError = useAppSelector(authErrorSelect);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { submitCount, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(DeleteAccountFormSchema),
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(deleteAccount(values));
  };

  useEffect(() => {
    if (authStatus === 'loading') {
      setPromiseAlert('Происходит удаление аккаунта...');
    } else if (authStatus === 'rejected') {
      const errorMessage =
        typeof authError === 'string' ? authError : authError?.message;

      if (errorMessage) updatePromiseAlert('error', errorMessage);
    } else if (authStatus === 'resolved') {
      updatePromiseAlert('success', 'Аккаунт удален');
    }
  }, [authStatus, authError]);

  useEffect(() => {
    if (authStatus === 'resolved') {
      navigate(SCREENS.LANDING);
    }
  }, [authStatus, navigate]);

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
        disabled={(!!submitCount && !isValid) || authStatus === 'loading'}
        text="удалить аккаунт"
      />
    </form>
  );
};

export { DeleteAccountForm };
