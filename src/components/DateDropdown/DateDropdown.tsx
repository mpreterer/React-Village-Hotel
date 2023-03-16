import {
  FC,
  KeyboardEvent,
  PointerEvent,
  useCallback,
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
  initialDates?: Date[];
  onSelect?: (date: Date[]) => void;
};

const defaultInitialDates: [] = [];

const DateDropdown: FC<Props> = ({
  hasTwoInputs = false,
  isDatepickerSmall = false,
  initialDates = defaultInitialDates,
  onSelect,
}) => {
  const dateDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date[]>(initialDates);
  const [firstInputValue, setFirstInputValue] = useState(
    hasTwoInputs
      ? getFormattedDate(selectedDate, true)[0]
      : getFormattedDate(selectedDate).join(' - ')
  );
  const [secondInputValue, setSecondInputValue] = useState(
    hasTwoInputs ? getFormattedDate(selectedDate, true)[1] : ''
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleDateDropdownSelect = useCallback(
    (date: Date[], formattedDate: string[]) => {
      if (hasTwoInputs) {
        setFirstInputValue(formattedDate[0] ?? '');
        setSecondInputValue(formattedDate[1] ?? '');
      } else {
        setFirstInputValue(formattedDate.join(' - '));
      }
      setSelectedDate(date);
      onSelect?.(date);
    },
    [hasTwoInputs, onSelect]
  );

  const handleDateDropdownCloseClick = useCallback(() => {
    setIsOpen(false);
  }, []);

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
        ? getFormattedDate(selectedDate, true)[0]
        : getFormattedDate(selectedDate).join(' - ')
    );
    setSecondInputValue(
      hasTwoInputs ? getFormattedDate(selectedDate, true)[1] : ''
    );
  }, [selectedDate, hasTwoInputs]);

  useEffect(() => {
    setSelectedDate(initialDates);
  }, [initialDates]);

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
          selectedDates={selectedDate}
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
