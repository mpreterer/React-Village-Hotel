import * as yup from 'yup';

import { RemoveAccountFormNames } from './constants';

const RemoveAccountFormSchema = yup.object({
  [RemoveAccountFormNames.Email]: yup
    .string()
    .email('Введите правильный Email')
    .required('Данное поле является обязательным'),
  [RemoveAccountFormNames.Password]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .required('Данное поле является обязательным'),
});

export { RemoveAccountFormSchema };
