import { DropdownGuestsIds } from '../shared/constants/DropdownGuestsIds';
import { FurnitureIds } from '../shared/constants/FurnitureIds';

type ParsedSearchParamsOptions = {
  furniture: { id: FurnitureIds; amount: number }[];
  convenience: string[];
  availability: string[];
  price: { from?: number; to?: number };
  selectedDates: Date[];
  rules: string[];
  capacity: { id: DropdownGuestsIds; amount: number }[];
};

export type { ParsedSearchParamsOptions };
