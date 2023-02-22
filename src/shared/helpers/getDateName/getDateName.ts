import { getWordDeclension } from '../getWordDeclension/getWordDeclension';

import {
  DAY_DECLENSIONS,
  MILLISECONDS_IN_DAY,
  MONTH_DECLENSIONS,
  WEEK_DECLENSIONS,
  YEAR_DECLENSIONS,
} from './constants';

const getDateName = (date: string) => {
  const dateDifference = Math.round(
    (Number(new Date()) - Number(new Date(date))) / MILLISECONDS_IN_DAY
  );

  let periodCount = dateDifference;
  let periodDeclensions = DAY_DECLENSIONS;

  if (dateDifference > 7 && dateDifference <= 28) {
    periodCount = Math.round(dateDifference / 7);
    periodDeclensions = WEEK_DECLENSIONS;
  }
  if (dateDifference > 28 && dateDifference <= 365) {
    periodCount = Math.round(dateDifference / 28);
    periodDeclensions = MONTH_DECLENSIONS;
  }
  if (dateDifference > 365) {
    periodCount = Math.round(dateDifference / 365);
    periodDeclensions = YEAR_DECLENSIONS;
  }

  return `${periodCount === 1 ? '' : periodCount} ${getWordDeclension(
    periodCount,
    periodDeclensions
  )}`;
};

export { getDateName };
