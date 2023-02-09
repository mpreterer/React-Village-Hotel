import { FC, useState } from 'react';
import classnames from 'classnames';

import { Button } from '../Button/Button';
import { CheckList } from '../CheckList/CheckList';
import { DateDropdown } from '../DateDropdown/DateDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownGuests } from '../DropdownGuests/DropdownGuests';
import { RangeSlider } from '../RangeSlider/RangeSlider';

import {
  CHECKBOXES,
  CHECKBOXES_RICH,
  CHECKLIST,
  DROPDOWN_DECLENSIONS_FURNITURE,
  DROPDOWN_ITEMS,
  DROPDOWN_ITEMS_FURNITURE,
  RANGE_SLIDER,
} from './constants';
import './Filters.scss';

const Filters: FC = () => {
  const [visibleFilters, setVisibleFilters] = useState(false);

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
            <DateDropdown isDatepickerSmall={visibleFilters} />
          </div>
          <div className="filters__guests-container">
            <DropdownGuests
              items={DROPDOWN_ITEMS}
              placeholder="Сколько гостей"
              title="Гости"
            />
          </div>
          <div className="filters__price-hotel">
            <RangeSlider
              title={RANGE_SLIDER.title}
              start={RANGE_SLIDER.start}
              step={RANGE_SLIDER.step}
              range={RANGE_SLIDER.range}
              text={RANGE_SLIDER.text}
            />
          </div>
          <div className="filters__order-in-room">
            <CheckList
              labelName="правила дома"
              isToggleable={false}
              isRich={false}
              listItems={CHECKBOXES}
            />
          </div>
          <div className="filters__availability">
            <CheckList
              labelName="доступность"
              isToggleable={false}
              isRich
              listItems={CHECKBOXES_RICH}
            />
          </div>
          <div className="filters__furniture">
            <Dropdown
              declensions={DROPDOWN_DECLENSIONS_FURNITURE}
              items={DROPDOWN_ITEMS_FURNITURE}
              placeholder="Выберите удобства"
              title="УДОБСТВА НОМЕРА"
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
        </div>
      </div>
    </aside>
  );
};

export { Filters };
