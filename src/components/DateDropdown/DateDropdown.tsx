import {
  FC,
  KeyboardEvent,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import { getFormattedDate } from '../../shared/helpers/getFormattedDate/getFormattedDate';
import { DatePicker } from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';

import './DateDropdown.scss';

type Props = {
  hasTwoInputs?: boolean;
  isDatepickerSmall?: boolean;
  selectedDates?: Date[];
  onSelect?: (date: Date[]) => void;
};

const DateDropdown: FC<Props> = ({
  hasTwoInputs = false,
  isDatepickerSmall = false,
  selectedDates = [],
  onSelect,
}) => {
  const dateDropdownRef = useRef<HTMLDivElement>(null);
  const [firstInputValue, setFirstInputValue] = useState(
    hasTwoInputs
      ? getFormattedDate(selectedDates, true)[0]
      : getFormattedDate(selectedDates).join(' - ')
  );

  const [secondInputValue, setSecondInputValue] = useState(
    hasTwoInputs ? getFormattedDate(selectedDates, true)[1] : ''
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleDateDropdownSelect = (date: Date[], formattedDate: string[]) => {
    if (hasTwoInputs) {
      setFirstInputValue(formattedDate[0] ?? '');
      setSecondInputValue(formattedDate[1] ?? '');
    } else {
      setFirstInputValue(formattedDate.join(' - '));
    }
    onSelect?.(date);
  };

  const handleDateDropdownCloseClick = () => {
    setIsOpen(false);
  };

  const handleDropdownPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLButtonElement
    ) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleDropdownKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLButtonElement
    ) {
      if (event.code === 'Space') {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.code === 'Enter') {
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    const handleDocumentPointerDown = ({ target }: Event) => {
      if (dateDropdownRef.current) {
        if (
          !(target instanceof Node && dateDropdownRef.current.contains(target))
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('pointerdown', handleDocumentPointerDown);

    return () => {
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
    };
  }, []);

  useEffect(() => {
    setFirstInputValue(
      hasTwoInputs
        ? getFormattedDate(selectedDates, true)[0]
        : getFormattedDate(selectedDates).join(' - ')
    );
    setSecondInputValue(
      hasTwoInputs ? getFormattedDate(selectedDates, true)[1] : ''
    );
  }, [selectedDates, hasTwoInputs]);

  return (
    <div
      className="date-dropdown"
      ref={dateDropdownRef}
      onPointerDown={handleDropdownPointerDown}
      onKeyDown={handleDropdownKeyDown}
      role="menu"
      tabIndex={0}
    >
      {hasTwoInputs ? (
        <div className="date-dropdown__wrapper">
          <div className="date-dropdown__start">
            <Input
              type="text"
              title="Прибытие"
              placeholder="ДД.ММ.ГГГГ"
              hasArrow
              readOnly
              value={firstInputValue}
            />
          </div>
          <div className="date-dropdown__end">
            <Input
              type="text"
              title="Выезд"
              placeholder="ДД.ММ.ГГГГ"
              hasArrow
              readOnly
              value={secondInputValue}
            />
          </div>
        </div>
      ) : (
        <div className="date-dropdown" ref={dateDropdownRef}>
          <Input
            type="text"
            title="Даты пребывания в отеле"
            placeholder="дд.мм - дд.мм"
            hasArrow
            isLowerCase
            readOnly
            value={firstInputValue}
          />
        </div>
      )}
      <div
        className={classNames('date-dropdown__date-picker', {
          'date-dropdown__date-picker_close': !isOpen,
        })}
      >
        <DatePicker
          selectedDates={selectedDates}
          dateFormatWithYear={hasTwoInputs}
          onSelect={handleDateDropdownSelect}
          isDatepickerSmall={isDatepickerSmall}
          onClickClose={handleDateDropdownCloseClick}
        />
      </div>
    </div>
  );
};

export { DateDropdown };
