import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPromiseAlert, updatePromiseAlert } from '../../libs/toastify';
import { SCREENS } from '../../routes/endpoints';
import {
  authErrorSelect,
  authStatusSelect,
  isAuthSelect,
} from '../../store/slices/auth/selectors';
import { signIn } from '../../store/slices/auth/slice';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Input } from '../Input/Input';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import { SignInFormNames } from './constants';
import { SignInFormSchema } from './helpers';
import './SignInForm.scss';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  [SignInFormNames.Email]: string;
  [SignInFormNames.Password]: string;
};

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const state = location.state as { from?: string } | null;
  const isAuth = useAppSelector(isAuthSelect);
  const authStatus = useAppSelector(authStatusSelect);
  const authError = useAppSelector(authErrorSelect);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { submitCount, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(SignInFormSchema),
  });

  useEffect(() => {
    if (isAuth) {
      if (state && state.from) {
        navigate(state.from);
      } else {
        navigate(SCREENS.LANDING);
      }
    }
  });

  useEffect(() => {
    if (authStatus === 'loading') {
      setPromiseAlert('Авторизация пользователя...');
    } else if (authStatus === 'rejected') {
      const errorMessage =
        typeof authError === 'string' ? authError : authError?.message;

      if (errorMessage) updatePromiseAlert('error', errorMessage);
    } else if (authStatus === 'resolved') {
      updatePromiseAlert('success', 'Авторизация выполнена');
    }
  }, [authStatus, authError]);

  const handleFormSubmit: SubmitHandler<FormValues> = (values) => {
    dispatch(signIn(values));
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
        <SubmitButton
          disabled={(!!submitCount && !isValid) || authStatus === 'loading'}
          text="войти"
        />
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
