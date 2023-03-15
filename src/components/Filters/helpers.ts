import { isValid } from 'date-fns';

import { DropdownGuestsIds } from '../../shared/constants/DropdownGuestsIds';
import { FurnitureIds } from '../../shared/constants/FurnitureIds';
import type { InitialState as FiltersState } from '../../store/slices/filters/slice';
import type { ParsedSearchParamsOptions } from '../../types/ParsedSearchParamsOptions';

import { SEARCH_PARAMS_SEPARATOR } from './constants';

type SearchParamsType = {
  adults?: string;
  children?: string;
  babies?: string;
  selectedDates?: string;
  availability?: string;
  convenience?: string;
  toPrice?: string;
  fromPrice?: string;
  rules?: string;
  bedrooms?: string;
  beds?: string;
  bathrooms?: string;
};

const getParsedParams = (
  searchParams: URLSearchParams
): ParsedSearchParamsOptions => {
  const parsedParams: ParsedSearchParamsOptions = {
    price: {},
    convenience: [],
    availability: [],
    selectedDates: [],
    rules: [],
    capacity: [],
    furniture: [],
  };

  const searchParamsEntries = Array.from(searchParams.entries()) as [
    keyof SearchParamsType,
    string
  ][];

  searchParamsEntries.forEach(([key, value]) => {
    if (key === 'convenience') {
      parsedParams.convenience = value.split(SEARCH_PARAMS_SEPARATOR);
    } else if (key === 'availability') {
      parsedParams.availability = value.split(SEARCH_PARAMS_SEPARATOR);
    } else if (key === 'fromPrice' && !isNaN(Number(value))) {
      parsedParams.price.from = Number(value);
    } else if (key === 'toPrice' && !isNaN(Number(value))) {
      parsedParams.price.to = Number(value);
    } else if (key === 'rules') {
      parsedParams.rules = value.split(SEARCH_PARAMS_SEPARATOR);
    } else if (key === 'adults' && !isNaN(Number(value))) {
      parsedParams.capacity.push({
        id: DropdownGuestsIds.ADULTS,
        amount: Number(value),
      });
    } else if (key === 'babies' && !isNaN(Number(value))) {
      parsedParams.capacity.push({
        id: DropdownGuestsIds.BABIES,
        amount: Number(value),
      });
    } else if (key === 'children' && !isNaN(Number(value))) {
      parsedParams.capacity.push({
        id: DropdownGuestsIds.CHILDREN,
        amount: Number(value),
      });
    } else if (key === 'selectedDates') {
      const parsedDates = value
        .split(SEARCH_PARAMS_SEPARATOR)
        .filter((item) => isValid(new Date(item)))
        .map((item) => new Date(item));
      parsedParams.selectedDates = parsedDates;
    } else if (key === 'bathrooms' && !isNaN(Number(value))) {
      parsedParams.furniture.push({
        id: FurnitureIds.BATHROOMS,
        amount: Number(value),
      });
    } else if (key === 'bedrooms' && !isNaN(Number(value))) {
      parsedParams.furniture.push({
        id: FurnitureIds.BEDROOMS,
        amount: Number(value),
      });
    } else if (key === 'beds' && !isNaN(Number(value))) {
      parsedParams.furniture.push({
        id: FurnitureIds.BEDS,
        amount: Number(value),
      });
    }
  });

  return parsedParams;
};

const getNewSearchParams = (filters: FiltersState) => {
  const {
    rules,
    convenience,
    availability,
    furniture,
    capacity,
    price,
    selectedDates,
  } = filters;

  const checkedRulesNames = rules
    .filter((item) => item.isChecked)
    .map((item) => item.name);
  const convenienceNames = convenience
    .filter((item) => item.isChecked)
    .map((item) => item.name);
  const availabilityNames = availability
    .filter((item) => item.isChecked)
    .map((item) => item.name);

  const furnitureParams = furniture
    .filter((item) => item.amount > 0)
    .reduce((acc: Partial<{ [key in FurnitureIds]: string }>, item) => {
      acc[item.id as FurnitureIds] = String(item.amount);
      return acc;
    }, {});

  const capacityParams = capacity.items
    .filter((item) => item.amount > 0)
    .reduce((acc: Partial<{ [key in DropdownGuestsIds]: string }>, item) => {
      acc[item.id] = String(item.amount);
      return acc;
    }, {});

  const newSearchParams: SearchParamsType = {
    ...(checkedRulesNames.length !== 0 && {
      rules: checkedRulesNames.join(SEARCH_PARAMS_SEPARATOR),
    }),
    ...(price !== null && {
      fromPrice: String(price.from),
    }),
    ...(price !== null && {
      toPrice: String(price.to),
    }),
    ...(convenienceNames.length !== 0 && {
      convenience: convenienceNames.join(SEARCH_PARAMS_SEPARATOR),
    }),
    ...(availabilityNames.length !== 0 && {
      availability: availabilityNames.join(SEARCH_PARAMS_SEPARATOR),
    }),
    ...(selectedDates.length !== 0 && {
      selectedDates: selectedDates
        .map((item) => item.toDateString())
        .join(SEARCH_PARAMS_SEPARATOR),
    }),
    ...furnitureParams,
    ...capacityParams,
  };

  return newSearchParams;
};

export { getNewSearchParams, getParsedParams };
