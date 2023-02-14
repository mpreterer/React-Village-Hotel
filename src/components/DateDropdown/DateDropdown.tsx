import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import { DatePicker } from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';

import './DateDropdown.scss';

type Props = {
  hasTwoInputs?: boolean;
  initialDates?: Date[];
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
  const [selectedDate, setSelectedDate] = useState<Date[]>(initialDates);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
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

  const handleDocumentPointerDown = ({ target }: PointerEvent) => {
    if (dateDropdownRef.current) {
      if (
        !(target instanceof Node && dateDropdownRef.current.contains(target))
      ) {
        setIsOpen(false);
      }
    }
  };

  const handleDropdownPointerDown = useCallback((event: PointerEvent) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLButtonElement
    ) {
      setIsOpen((prev) => !prev);
    }
  }, []);

  const handleDropdownKeyDown = useCallback((event: KeyboardEvent) => {
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
  }, []);

  useEffect(() => {
    const { current } = dateDropdownRef;
    document.addEventListener('pointerdown', handleDocumentPointerDown);
    if (current) {
      current.addEventListener('pointerdown', handleDropdownPointerDown);
      current.addEventListener('keydown', handleDropdownKeyDown);
    }

    return () => {
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
      if (current) {
        current.removeEventListener('pointerdown', handleDropdownPointerDown);
        current.removeEventListener('keydown', handleDropdownKeyDown);
      }
    };
  }, [handleDropdownPointerDown, handleDropdownKeyDown]);

  return (
    <div className="date-dropdown" ref={dateDropdownRef}>
      {hasTwoInputs ? (
        <div className="date-dropdown__wrapper">
          <div className="date-dropdown__start">
            <Input
              type="text"
              title="Прибытие"
              placeholder="ДД.ММ.ГГГГ"
              hasArrow
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
              hasArrow
              onChange={onChangeSecondInput}
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
            onChange={onChangeSingleInput}
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
