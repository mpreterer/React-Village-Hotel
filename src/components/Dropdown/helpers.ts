import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { DropdownItemData } from '../../types/DropdownItemData';

export type DropdownItemsDeclensions = {
  [key: string]: string[];
};

const getCorrectDropdownValue = (
  items: DropdownItemData[],
  declensions: DropdownItemsDeclensions
) => {
  const value = items
    .map(({ amount, id }) => {
      let itemValue;

      if (amount > 0) {
        itemValue = `${amount} ${getWordDeclension(amount, declensions[id])}`;
      }

      return itemValue;
    })
    .filter((item) => typeof item !== 'undefined');

  return value;
};

export { getCorrectDropdownValue };
