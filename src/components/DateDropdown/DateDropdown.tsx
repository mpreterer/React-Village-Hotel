import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { Datepicker } from '../../libs/air-datepicker';
import { Input } from '../Input/Input';

import './DateDropdown.scss';

type Props = {
  hasTwoInputs?: boolean;
  initialDates?: (Date | string)[];
  isDatepickerSmall?: boolean;
  onChangeFirstInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSecondInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSingleInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect?: (date: Date[]) => void;
};

const DateDropdown: FC<Props> = ({
  hasTwoInputs = false,
  initialDates = [],
  isDatepickerSmall = false,
  onChangeFirstInput,
  onChangeSecondInput,
  onChangeSingleInput,
  onSelect,
}) => {
  const dateDropdownRef = useRef<HTMLDivElement>(null);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');

  useEffect(() => {
    if (dateDropdownRef.current) {
      const datepicker = new Datepicker(dateDropdownRef.current, {
        hasTwoInputs,
        initialDates,
        isDatepickerSmall,
        onSelect,
        setFirstInputValue,
        setSecondInputValue,
      });

      return () => datepicker.destroy();
    }
    return () => {};
  }, [hasTwoInputs, initialDates, isDatepickerSmall, onSelect]);

  return hasTwoInputs ? (
    <div className="date-dropdown" ref={dateDropdownRef}>
      <div className="date-dropdown__wrapper">
        <div className="date-dropdown__start">
          <Input
            type="text"
            title="Прибытие"
            placeholder="ДД.ММ.ГГГГ"
            dataType="first-input"
            hasArrow
            arrowButtonDataType="arrow"
            onChange={onChangeFirstInput}
            readOnly
            value={firstInputValue}
          />
        </div>
        <div className="date-dropdown__end">
          <Input
            type="text"
            title="Выезд"
            placeholder="ДД.ММ.ГГГГ"
            dataType="second-input"
            hasArrow
            arrowButtonDataType="arrow"
            onChange={onChangeSecondInput}
            readOnly
            value={secondInputValue}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="date-dropdown" ref={dateDropdownRef}>
      <Input
        type="text"
        title="Даты пребывания в отеле"
        placeholder="дд.мм - дд.мм"
        dataType="single-input"
        hasArrow
        arrowButtonDataType="arrow"
        isLowerCase
        onChange={onChangeSingleInput}
        readOnly
        value={firstInputValue}
      />
    </div>
  );
};

export { DateDropdown };
