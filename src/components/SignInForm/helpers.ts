import * as yup from 'yup';

import { SignInFormNames } from './constants';

const SignInFormSchema = yup.object({
  [SignInFormNames.Email]: yup
    .string()
    .email('Введите правильный Email')
    .required('Данное поле является обязательным'),
  [SignInFormNames.Password]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать не менее 8 символов,
      включая минимум один символ верхнего регистра, один
      символ нижнего регистра, одну цифру и один специальный символ.`
    )
    .required('Данное поле является обязательным'),
});

export { SignInFormSchema };
