import * as yup from 'yup';

import { ResetPasswordFormNames } from './constants';

const ResetPasswordFormSchema = yup.object({
  [ResetPasswordFormNames.Password]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .required('Данное поле является обязательным'),
  [ResetPasswordFormNames.NewPassword]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .notOneOf(
      [yup.ref(ResetPasswordFormNames.Password)],
      'Пароль не должен совпадать со старым'
    )
    .required('Данное поле является обязательным'),
  [ResetPasswordFormNames.PasswordConfirm]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .oneOf(
      [yup.ref(ResetPasswordFormNames.NewPassword)],
      'Пароль не совпадает с новым'
    )
    .required('Данное поле является обязательным'),
});

export { ResetPasswordFormSchema };
