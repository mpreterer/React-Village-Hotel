import { declination } from '../../shared/helpers/declination/declination';

export type DropdownItemData = {
  id: string;
  name: string;
  amount: number;
  maxValue?: number;
};

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
        itemValue = `${amount} ${declination(amount, declensions[id])}`;
      }

      return itemValue;
    })
    .filter((item) => typeof item !== 'undefined');

  return value;
};

export { getCorrectDropdownValue };
