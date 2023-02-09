import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Button } from '../Button/Button';

import { DropdownGuestsItem } from './DropdownGuestsItem/DropdownGuestsItem';
import { DROPDOWN_GUESTS_DECLENSIONS } from './constant';
import { DropdownGuestsItemData, getCorrectDropdownValue } from './helpers';
import '../../styles/Dropdown.scss';

type Props = {
  items: DropdownGuestsItemData[];
  guestsLimit?: number;
  babiesLimit?: number;
  title?: string;
  placeholder?: string;
  onChange?: (dropdownItems: DropdownGuestsItemData[]) => void;
};

const DropdownGuests: FC<Props> = ({
  items,
  guestsLimit = 15,
  babiesLimit = 10,
  title = '',
  placeholder = '',
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState(items);

  const totalAmount = dropdownItems.reduce((acc, item) => acc + item.amount, 0);

  const guestsAmount = dropdownItems
    .filter((item) => item.id !== 'babies')
    .reduce((acc, item) => acc + item.amount, 0);

  const babiesAmount = Number(
    dropdownItems.find((item) => item.id === 'babies')?.amount
  );
  const adultsAmount = Number(
    dropdownItems.find((item) => item.id === 'adults')?.amount
  );

  const getLimit = (id: string) => {
    let result;

    if (id === 'babies') {
      result = adultsAmount <= 0 || babiesAmount >= babiesLimit;
    }

    if (id !== 'babies') {
      result = guestsAmount >= guestsLimit;
    }

    return result;
  };

  const clear = () => {
    const newItems = dropdownItems.map((item) => {
      return {
        ...item,
        amount: 0,
      };
    });

    setDropdownItems(newItems);
    onChange?.(newItems);
  };

  const handleCounterChange = (name: string, amount: number) => {
    let adultsAmountValue = 0;

    const newItems = dropdownItems.map((item) => {
      let currentItem = item;

      if (item.name === name) {
        currentItem = {
          ...item,
          amount,
        };
      }

      if (item.id === 'adults') {
        adultsAmountValue = amount;
      }

      if (item.id === 'babies' && adultsAmountValue <= 0) {
        currentItem = {
          ...item,
          amount: 0,
        };
      }

      return currentItem;
    });

    setDropdownItems(newItems);
    onChange?.(newItems);
  };

  useEffect(() => {
    const handleDocumentPointerDown = (event: PointerEvent) => {
      const { target } = event;
      const dropdown = dropdownRef.current;
      const dropdownContainsTarget =
        target instanceof Node && dropdown && dropdown.contains(target);

      if (!dropdownContainsTarget) {
        setIsOpen(false);
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
            DROPDOWN_GUESTS_DECLENSIONS,
            guestsAmount,
            babiesAmount
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
            {dropdownItems.map(({ id, name, amount }) => (
              <DropdownGuestsItem
                key={id}
                name={name}
                amount={amount}
                onChangeCounter={handleCounterChange}
                incrementDisabled={getLimit(id)}
              />
            ))}
          </ul>
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
        </div>
      </div>
    </div>
  );
};

export { DropdownGuests };
