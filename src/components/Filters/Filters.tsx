import { FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { isValid } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FURNITURE_DECLENSIONS } from '../../shared/constants/dropdownDeclensions';
import { DropdownGuestsIds } from '../../shared/constants/DropdownGuestsIds';
import { FurnitureIds } from '../../shared/constants/FurnitureIds';
import { filterSelect } from '../../store/slices/filters/selectors';
import { filtersActions } from '../../store/slices/filters/slice';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import {
  DropdownGuestsItemData,
  DropdownItemData,
} from '../../types/DropdownItemData';
import type { ParsedSearchParamsOptions } from '../../types/ParsedSearchParamsOptions';
import { Button } from '../Button/Button';
import { CheckList } from '../CheckList/CheckList';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { RangeSlider } from '../RangeSlider/RangeSlider';

import { SEARCH_PARAMS_SEPARATOR } from './constants';
import './Filters.scss';

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

const Filters: FC = () => {
  const [visibleFilters, setVisibleFilters] = useState(false);
  const {
    rules,
    price,
    convenience,
    availability,
    selectedDates,
    furniture,
    capacity,
  } = useAppSelector(filterSelect);
  const [searchParams, setSearchParams] = useSearchParams();
  const rooms = useAppSelector(roomsSelect);
  const dispatch = useAppDispatch();

  const handleRulesCheckboxChange = (name: string) => {
    dispatch(filtersActions.toggleRule(name));
  };

  const handleAvailabilityCheckBoxChange = (name: string) => {
    dispatch(filtersActions.toggleAvailability(name));
  };

  const handleConvenienceCheckboxChange = (name: string) => {
    dispatch(filtersActions.toggleConvenience(name));
  };

  const handleRangeSliderChange = useCallback(
    (values: number[]) => {
      dispatch(filtersActions.updatePrice(values));
    },
    [dispatch]
  );

  const handleDateDropdownSelect = useCallback(
    (date: Date[]) => {
      dispatch(filtersActions.updateSelectedDate(date));
    },
    [dispatch]
  );

  const handleFurnitureDropdownChange = (items: DropdownItemData[]) => {
    dispatch(filtersActions.updateFurniture(items));
  };

  const handleGuestDropdownChange = (items: DropdownGuestsItemData[]) => {
    dispatch(filtersActions.updateCapacity(items));
  };

  useEffect(() => {
    dispatch(filtersActions.syncFilters(rooms));
  }, [rooms, dispatch]);

  useEffect(() => {
    const parsedOptions: ParsedSearchParamsOptions = {
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
        parsedOptions.convenience = value.split(SEARCH_PARAMS_SEPARATOR);
      } else if (key === 'availability') {
        parsedOptions.availability = value.split(SEARCH_PARAMS_SEPARATOR);
      } else if (key === 'fromPrice' && !isNaN(Number(value))) {
        parsedOptions.price.from = Number(value);
      } else if (key === 'toPrice' && !isNaN(Number(value))) {
        parsedOptions.price.to = Number(value);
      } else if (key === 'rules') {
        parsedOptions.rules = value.split(SEARCH_PARAMS_SEPARATOR);
      } else if (key === 'adults' && !isNaN(Number(value))) {
        parsedOptions.capacity.push({
          id: DropdownGuestsIds.ADULTS,
          amount: Number(value),
        });
      } else if (key === 'babies' && !isNaN(Number(value))) {
        parsedOptions.capacity.push({
          id: DropdownGuestsIds.BABIES,
          amount: Number(value),
        });
      } else if (key === 'children' && !isNaN(Number(value))) {
        parsedOptions.capacity.push({
          id: DropdownGuestsIds.CHILDREN,
          amount: Number(value),
        });
      } else if (key === 'selectedDates') {
        const parsedDates = value
          .split(SEARCH_PARAMS_SEPARATOR)
          .filter((item) => isValid(new Date(item)))
          .map((item) => new Date(item));
        parsedOptions.selectedDates = parsedDates;
      } else if (key === 'bathrooms' && !isNaN(Number(value))) {
        parsedOptions.furniture.push({
          id: FurnitureIds.BATHROOMS,
          amount: Number(value),
        });
      } else if (key === 'bedrooms' && !isNaN(Number(value))) {
        parsedOptions.furniture.push({
          id: FurnitureIds.BEDROOMS,
          amount: Number(value),
        });
      } else if (key === 'beds' && !isNaN(Number(value))) {
        parsedOptions.furniture.push({
          id: FurnitureIds.BEDS,
          amount: Number(value),
        });
      }
    });
    dispatch(filtersActions.syncFiltersWithUrl(parsedOptions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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

    setSearchParams(newSearchParams);
  }, [
    rules,
    price,
    furniture,
    selectedDates,
    convenience,
    availability,
    capacity,
    setSearchParams,
  ]);

  return (
    <aside className="filters">
      <div className="filters__button">
        <Button
          text="открыть фильтры"
          onClick={() => setVisibleFilters(true)}
        />
      </div>
      <div
        className={classnames('filters__content', {
          filters__content_visible: visibleFilters,
        })}
      >
        <div className="filters__content-wrapper">
          <button
            className="filters__content-button-close"
            type="button"
            aria-label="close"
            onClick={() => setVisibleFilters(false)}
          />
          <div className="filters__arrival-in-hotel">
            <DateDropdown
              isDatepickerSmall
              initialDates={selectedDates}
              onSelect={handleDateDropdownSelect}
            />
          </div>
          <div className="filters__guests-container">
            <DropdownGuests
              items={capacity.items}
              onChange={handleGuestDropdownChange}
              guestsLimit={capacity.guestsLimit}
              babiesLimit={capacity.babiesLimit}
            />
          </div>
          <div className="filters__price-hotel">
            {price && (
              <RangeSlider
                title="Диапазон цены"
                start={[price.from, price.to]}
                step={100}
                range={{ min: price.min, max: price.max }}
                text="Стоимость за сутки пребывания в номере"
                onChange={handleRangeSliderChange}
              />
            )}
          </div>
          <div className="filters__order-in-room">
            <CheckList
              labelName="правила дома"
              listItems={rules}
              onChange={handleRulesCheckboxChange}
            />
          </div>
          <div className="filters__availability">
            <CheckList
              labelName="доступность"
              isRich
              listItems={availability}
              onChange={handleAvailabilityCheckBoxChange}
            />
          </div>
          <div className="filters__furniture">
            <Dropdown
              declensions={FURNITURE_DECLENSIONS}
              items={furniture}
              placeholder="Выберете удобства"
              title="УДОБСТВА НОМЕРА"
              onChange={handleFurnitureDropdownChange}
            />
          </div>
          <div className="filters__convenience">
            <CheckList
              labelName="Дополнительные удобства"
              isToggleable
              listItems={convenience}
              onChange={handleConvenienceCheckboxChange}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Filters };
