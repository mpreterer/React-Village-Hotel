import { ChangeEvent, FC, useEffect, useRef } from 'react';

import { Datepicker } from '../../libs/air-datepicker';
import { Input } from '../Input/Input';

import './DateDropdown.scss';

type Props = {
  hasTwoInputs?: boolean;
  initialDates?: (Date | string)[];
  datepickerIsSmall?: boolean;
  onChangeFirstInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSecondInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSingleInput?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const DateDropdown: FC<Props> = ({
  hasTwoInputs,
  initialDates,
  datepickerIsSmall,
  onChangeFirstInput,
  onChangeSecondInput,
  onChangeSingleInput,
}) => {
  const dateDropdownRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (dateDropdownRef.current) {
      const datepicker = new Datepicker(dateDropdownRef.current, {
        hasTwoInputs,
        initialDates,
        datepickerIsSmall,
      });

      return () => datepicker.destroy();
    }
  }, [hasTwoInputs, initialDates, datepickerIsSmall]);

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
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="date-dropdown" ref={dateDropdownRef}>
      <Input
        type="text"
        title="Дата пребывания в отеле"
        placeholder="дд.мм - дд.мм"
        dataType="single-input"
        hasArrow
        arrowButtonDataType="arrow"
        isLowerCase
        onChange={onChangeSingleInput}
        readOnly
      />
    </div>
  );
};

export { DateDropdown };
