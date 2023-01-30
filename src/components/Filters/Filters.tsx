import { FC } from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { CheckList } from '../CheckList/CheckList';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { RangeSlider } from '../RangeSlider/RangeSlider';

import {
  CHECKBOXES,
  CHECKBOXES_RICH,
  CHECKLIST,
  DROPDOWN_DECLENSIONS,
  DROPDOWN_DECLENSIONS_FURNITURE,
  DROPDOWN_ITEMS,
  DROPDOWN_ITEMS_FURNITURE,
  RANGE_SLIDER_RANGE,
  RANGE_SLIDER_START,
  RANGE_SLIDER_STEP,
  RANGE_SLIDER_TITLE,
} from './constants';
import './Filters.scss';

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
        <span className="filters__title">правила дома</span>
        <ul className="filters__order-in-room-list">
          {CHECKBOXES.map((item) => (
            <CheckBox
              label={item.label}
              name={item.name}
              isRich={item.isRich}
              key={item.name}
            />
          ))}
        </ul>
      </div>
      <div className="filters__availability">
        <span className="filters__title">доступность</span>
        <ul className="filters__availability-list">
          {CHECKBOXES_RICH.map((item) => (
            <CheckBox
              label={item.label}
              name={item.name}
              isRich={item.isRich}
              description={item.description}
              key={item.name}
            />
          ))}
        </ul>
      </div>
      <div className="filters__furniture">
        <Dropdown
          declensions={DROPDOWN_DECLENSIONS_FURNITURE}
          items={DROPDOWN_ITEMS_FURNITURE}
          dropdownType="comfort"
          placeholder="Сколько гостей"
        />
      </div>
      <div className="filters__convenience">
        <CheckList
          labelName="Дополнительные удобства"
          isToggleable
          isRich={false}
          listItems={CHECKLIST}
        />
      </div>
    </aside>
  );
};

export { Filters };
