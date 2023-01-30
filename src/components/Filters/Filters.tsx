import { FC } from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { CheckList } from '../CheckList/CheckList';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { RangeSlider } from '../RangeSlider/RangeSlider';

import './Filters.scss';

import {
  CHECKBOXES,
  DROPDOWN_DECLENSIONS,
  DROPDOWN_ITEMS,
  RANGE_SLIDER_RANGE,
  RANGE_SLIDER_START,
  RANGE_SLIDER_STEP,
  RANGE_SLIDER_TITLE,
} from './constants';

const Filters: FC = () => {
  return (
    <aside className="filters">
      <div className="filters__arrival-in-hotel">
        <DateDropdown />
      </div>
      <div className="filters__guests-container">
        <Dropdown
          declensions={DROPDOWN_DECLENSIONS}
          items={DROPDOWN_ITEMS}
          dropdownType="guests"
          placeholder="Сколько гостей"
        />
      </div>
      <div className="filters__price-hotel">
        <RangeSlider
          title={RANGE_SLIDER_TITLE}
          start={RANGE_SLIDER_START}
          step={RANGE_SLIDER_STEP}
          range={RANGE_SLIDER_RANGE}
        />
      </div>
      <div className="filters__order-in-room">
        {CHECKBOXES.map((item) => (
          <CheckBox
            label={item.label}
            name={item.name}
            isRich={item.isRich}
            key={item.name}
          />
        ))}
      </div>
      <div className="filters__availability" />
      <div className="filters__furniture" />
      <div className="filters__convenience">
        <CheckList
          labelName="правила дома"
          isToggleable
          isRich={false}
          listItems={[{ label: 'курение', name: 'Можно курить', id: 1 }]}
        />
      </div>
    </aside>
  );
};

export { Filters };
