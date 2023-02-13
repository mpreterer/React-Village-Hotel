import { getWordDeclension } from '../getWordDeclension/getWordDeclension';

import {
  DAY_DECLENSIONS,
  MONTH_DECLENSIONS,
  WEEK_DECLENSIONS,
  YEAR_DECLENSIONS,
} from './constants';

const getDateName = (date: string) => {
  const dateDifference = Math.round(
    (Number(new Date()) - Number(new Date(date))) / 86400000
  );

  let periodCount = dateDifference;
  let periodType = 'day';

  if (dateDifference > 7 && dateDifference <= 28) {
    periodType = 'week';
    periodCount = Math.round(dateDifference / 7);
  }
  if (dateDifference > 28 && dateDifference <= 365) {
    periodType = 'month';
    periodCount = Math.round(dateDifference / 28);
  }
  if (dateDifference > 365) {
    periodType = 'year';
    periodCount = Math.round(dateDifference / 365);
  }

  let periodDeclensions: string[] = [];

  switch (periodType) {
    case 'day':
      periodDeclensions = DAY_DECLENSIONS;
      break;
    case 'week':
      periodDeclensions = WEEK_DECLENSIONS;
      break;
    case 'month':
      periodDeclensions = MONTH_DECLENSIONS;
      break;
    case 'year':
      periodDeclensions = YEAR_DECLENSIONS;
      break;
    default:
      periodDeclensions = [];
  }

  return `${periodCount} ${getWordDeclension(periodCount, periodDeclensions)}`;
};

export { getDateName };
