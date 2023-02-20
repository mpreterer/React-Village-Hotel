import { differenceInCalendarYears, isDate, parse } from 'date-fns';
import * as yup from 'yup';

import { MAX_DATE, MIN_DATE, SignUpFormNames } from './constants';

const signUpFormSchema = yup.object({
  [SignUpFormNames.Name]: yup
    .string()
    .required('Данное поле является обязательным'),
  [SignUpFormNames.Surname]: yup
    .string()
    .required('Данное поле является обязательным'),
  [SignUpFormNames.Password]: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один
   символ нижнего регистра, одну цифру и один символ специального регистра.`
    )
    .required('Данное поле является обязательным'),
  [SignUpFormNames.Birthdate]: yup
    .date()
    .typeError('Введите полностью вашу дату рождения')
    .min(
      MIN_DATE,
      `Вы должны быть моложе ${differenceInCalendarYears(
        new Date(),
        MIN_DATE
      )} лет`
    )
    .max(
      MAX_DATE,
      `Вы должны быть старше ${differenceInCalendarYears(
        new Date(),
        MAX_DATE
      )} лет`
    )
    .transform((_, originalValue: string) =>
      isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date())
    )
    .required('Данное поле является обязательным'),
  [SignUpFormNames.Email]: yup
    .string()
    .email('введите правильный email')
    .required('Данное поле является обязательным'),
});

export { signUpFormSchema };
