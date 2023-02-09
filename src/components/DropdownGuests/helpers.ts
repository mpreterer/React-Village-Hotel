import { DropdownGuestsIds } from '../../shared/constants/DropdownGuestsIds';
import { declination } from '../../shared/helpers/declination/declination';

export type DropdownGuestsItemData = {
  id: DropdownGuestsIds;
  name: string;
  amount: number;
};

export type DropdownItemsDeclensions = {
  guests: string[];
  babies: string[];
};

const getCorrectDropdownValue = (
  declensions: DropdownItemsDeclensions,
  guestsAmount: number,
  babiesAmount: number
) => {
  const value = [];

  if (guestsAmount > 0) {
    const guestsValue = `${guestsAmount} ${declination(
      guestsAmount,
      declensions.guests
    )}`;

    value.push(guestsValue);
  }

  if (babiesAmount > 0) {
    const babiesValue = `${babiesAmount} ${declination(
      babiesAmount,
      declensions.babies
    )}`;

    value.push(babiesValue);
  }

  return value;
};

export { getCorrectDropdownValue };
