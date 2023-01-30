import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { declination } from '../../shared/helpers/declination/declination';
import { Button } from '../Button/Button';

import { DropdownItem } from './DropdownItem/DropdownItem';
import './Dropdown.scss';

type DropdownItemData = {
  id: string;
  name: string;
  amount: number;
  maxValue?: number;
};

type DropdownItemsDeclensions = {
  [key: string]: string[];
};

type DropdownType = 'comfort' | 'guests';

type Props = {
  dropdownType: DropdownType;
  items: DropdownItemData[];
  declensions: DropdownItemsDeclensions;
  title?: string;
  placeholder?: string;
  onChange?: (dropdownItems: DropdownItemData[]) => void;
};

const getCorrectDropdownValue = (
  dropdownType: DropdownType,
  items: DropdownItemData[],
  declensions: DropdownItemsDeclensions,
  totalGuests: number | null
) => {
  const value = [];

  if (dropdownType === 'guests') {
    const babiesAmount = items.find((item) => item.id === 'babies')?.amount;
    const totalGuestsIsMoreThanZero = totalGuests && totalGuests > 0;
    const babiesAmountIsMoreThanZero = babiesAmount && babiesAmount > 0;

    if (totalGuestsIsMoreThanZero) {
      const guestsValue = `${totalGuests} ${declination(
        totalGuests,
        declensions.guests
      )}`;

      value.push(guestsValue);
    }

    if (babiesAmountIsMoreThanZero) {
      const babiesValue = `${babiesAmount} ${declination(
        babiesAmount,
        declensions.babies
      )}`;

      value.push(babiesValue);
    }
  } else if (dropdownType === 'comfort') {
    items.forEach(({ amount, id }) => {
      let itemValue;

      if (amount > 0) {
        itemValue = `${amount} ${declination(amount, declensions[id])}`;

        value.push(itemValue);
      }
    });
  }

  return value;
};

const Dropdown: FC<Props> = ({
  title,
  placeholder,
  items,
  declensions,
  dropdownType,
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState(items);

  const totalAmount =
    dropdownType === 'guests'
      ? dropdownItems.reduce((acc, item) => acc + item.amount, 0)
      : null;

  const clear = () => {
    setDropdownItems((prevState) => {
      return prevState.map((item) => {
        const currentItem = item;

        currentItem.amount = 0;

        return currentItem;
      });
    });

    onChange?.(dropdownItems);
  };

  const handleCounterChange = (name: string, amount: number) => {
    setDropdownItems((prevState) => {
      return prevState.map((item) => {
        const currentItem = item;

        if (currentItem.name === name) {
          currentItem.amount = amount;
        }

        return currentItem;
      });
    });

    onChange?.(dropdownItems);
  };

  useEffect(() => {
    const handleDocumentPointerDown = (event: PointerEvent) => {
      const { target } = event;
      const dropdown = dropdownRef.current;
      const dropdownAndTargetAreExisted = target instanceof Node && dropdown;

      if (dropdownAndTargetAreExisted) {
        if (!dropdown.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('pointerdown', handleDocumentPointerDown);

    return () =>
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
  }, []);

  const handleDropdownPointerDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDropdownKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setIsOpen((prevState) => !prevState);
    }
  };

  const handleClearButtonPointerDown = () => {
    clear();
  };

  const handleClearButtonKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();
      clear();
    }
  };

  const handleApplyButtonPointerDown = () => {
    setIsOpen(false);
  };

  const handleApplyButtonKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={classNames('dropdown', {
        dropdown_opened: isOpen,
      })}
    >
      {title && <h3 className="dropdown__heading">{title}</h3>}
      <div className="dropdown__wrapper">
        <input
          className="dropdown__input"
          type="text"
          placeholder={placeholder}
          value={getCorrectDropdownValue(
            dropdownType,
            dropdownItems,
            declensions,
            totalAmount
          ).join(', ')}
          onPointerDown={handleDropdownPointerDown}
          onKeyDown={handleDropdownKeyDown}
          readOnly
        />
        <button
          className={classNames('dropdown__arrow-button', 'material-icons', {
            'dropdown__arrow-button_rotate': isOpen,
          })}
          type="button"
          onPointerDown={handleDropdownPointerDown}
          onKeyDown={handleDropdownKeyDown}
        >
          expand_more
        </button>
        <div className="dropdown__drop">
          <ul className="dropdown__list">
            {dropdownItems.map(({ id, name, amount, maxValue = 10 }) => (
              <DropdownItem
                key={id}
                name={name}
                amount={amount}
                maxValue={maxValue}
                onChangeCounter={handleCounterChange}
              />
            ))}
          </ul>
          {dropdownType === 'guests' && (
            <div className="dropdown__buttons">
              <div
                className={classNames('dropdown__button-clear', {
                  dropdown__button_hidden: Number(totalAmount) <= 0,
                })}
              >
                <Button
                  text="Очистить"
                  onPointerDown={handleClearButtonPointerDown}
                  onKeyDown={handleClearButtonKeyDown}
                />
              </div>
              <div className="dropdown__button-apply">
                <Button
                  text="Применить"
                  onPointerDown={handleApplyButtonPointerDown}
                  onKeyDown={handleApplyButtonKeyDown}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Dropdown };
