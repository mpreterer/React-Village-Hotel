import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';

export type DropdownGuestsItemsDeclensions = {
  guests: string[];
  babies: string[];
};

const getCorrectDropdownGuestsValue = (
  declensions: DropdownGuestsItemsDeclensions,
  guestsAmount: number,
  babiesAmount: number
) => {
  const value = [];

  if (guestsAmount > 0) {
    const guestsValue = `${guestsAmount} ${getWordDeclension(
      guestsAmount,
      declensions.guests
    )}`;

    value.push(guestsValue);
  }

  if (babiesAmount > 0) {
    const babiesValue = `${babiesAmount} ${getWordDeclension(
      babiesAmount,
      declensions.babies
    )}`;

    value.push(babiesValue);
  }

  return value;
};

export { getCorrectDropdownGuestsValue };
