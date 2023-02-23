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

const TOAST_ID = 'randomId999';

export { Genders, MAX_DATE, MIN_DATE, SignUpFormNames, TOAST_ID };
