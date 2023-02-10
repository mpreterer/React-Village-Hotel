import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { DropdownItemData } from '../../types/DropdownItemData';

export type DropdownItemsDeclensions = {
  [key: string]: string[];
};

export type DropdownType = 'comfort' | 'guests';

const getCorrectDropdownValue = (
  dropdownType: DropdownType,
  items: DropdownItemData[],
  declensions: DropdownItemsDeclensions,
  totalGuests: number | null
) => {
  const value = [];

  if (dropdownType === 'guests') {
    const babiesAmount = items.find((item) => item.id === 'babies')?.amount;
    const totalGuestsIsMoreThanZero = totalGuests && totalGuests > 0;
    const babiesAmountIsMoreThanZero = babiesAmount && babiesAmount > 0;

    if (totalGuestsIsMoreThanZero) {
      const guestsValue = `${totalGuests} ${getWordDeclension(
        totalGuests,
        declensions.guests
      )}`;

      value.push(guestsValue);
    }

    if (babiesAmountIsMoreThanZero) {
      const babiesValue = `${babiesAmount} ${getWordDeclension(
        babiesAmount,
        declensions.babies
      )}`;

      value.push(babiesValue);
    }
  }

  if (dropdownType === 'comfort') {
    items.forEach(({ amount, id }) => {
      let itemValue;

      if (amount > 0) {
        itemValue = `${amount} ${getWordDeclension(amount, declensions[id])}`;

        value.push(itemValue);
      }
    });
  }

  return value;
};

export { getCorrectDropdownValue };
