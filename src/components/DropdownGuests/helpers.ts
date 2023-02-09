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
  items: DropdownGuestsItemData[],
  declensions: DropdownItemsDeclensions,
  totalGuests: number
) => {
  const value = [];

  const babiesAmount = Number(
    items.find((item) => item.id === 'babies')?.amount
  );

  if (totalGuests > 0) {
    const guestsValue = `${totalGuests} ${declination(
      totalGuests,
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
