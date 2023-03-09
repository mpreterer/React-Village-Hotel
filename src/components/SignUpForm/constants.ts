import { sub } from 'date-fns';

const enum SignUpFormNames {
  Name = 'name',
  Surname = 'surname',
  Gender = 'gender',
  Birthdate = 'birthdate',
  Email = 'email',
  Password = 'password',
  Special = 'special',
}

const enum Genders {
  Man = 'man',
  Woman = 'woman',
}

const MIN_DATE = sub(new Date().setHours(0, 0, 0, 0), { years: 100 });
const MAX_DATE = sub(new Date().setHours(0, 0, 0, 0), { years: 18 });

const SIGN_UP_FORM_TOAST_ID = 'SIGN_UP_FORM_TOAST_ID';

export { Genders, MAX_DATE, MIN_DATE, SIGN_UP_FORM_TOAST_ID, SignUpFormNames };
