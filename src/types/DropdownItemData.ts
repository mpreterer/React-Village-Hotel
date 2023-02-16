import { DropdownGuestsIds } from '../shared/constants/DropdownGuestsIds';

type DropdownItemData = {
  id: string;
  name: string;
  amount: number;
  maxValue: number;
};

type DropdownGuestsItemData = {
  id: DropdownGuestsIds;
  name: string;
  amount: number;
};

export type { DropdownGuestsItemData, DropdownItemData };
