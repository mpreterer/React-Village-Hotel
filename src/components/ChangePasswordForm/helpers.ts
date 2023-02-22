import * as yup from 'yup';

import { ChangePasswordFormNames } from './constants';

const ChangePasswordFormSchema = yup.object({
  [ChangePasswordFormNames.Password]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .required('Данное поле является обязательным'),
  [ChangePasswordFormNames.NewPassword]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .notOneOf(
      [yup.ref(ChangePasswordFormNames.Password)],
      'Пароль не должен совпадать со старым'
    )
    .required('Данное поле является обязательным'),
  [ChangePasswordFormNames.PasswordConfirm]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .oneOf(
      [yup.ref(ChangePasswordFormNames.NewPassword)],
      'Пароль не совпадает с новым'
    )
    .required('Данное поле является обязательным'),
});

export { ChangePasswordFormSchema };
