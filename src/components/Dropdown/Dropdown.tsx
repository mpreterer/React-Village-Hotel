import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { DropdownItemData } from '../../types/DropdownItemData';
import { Button } from '../Button/Button';

import { DropdownItem } from './DropdownItem/DropdownItem';
import {
  DropdownItemsDeclensions,
  DropdownType,
  getCorrectDropdownValue,
} from './helpers';
import './Dropdown.scss';

type Props = {
  dropdownType: DropdownType;
  items: DropdownItemData[];
  declensions: DropdownItemsDeclensions;
  title?: string;
  placeholder?: string;
  onChange?: (dropdownItems: DropdownItemData[]) => void;
};

const Dropdown: FC<Props> = ({
  title = '',
  placeholder = '',
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
    const newItems = dropdownItems.map((item) => {
      const currentItem = item;

      currentItem.amount = 0;

      return currentItem;
    });

    setDropdownItems(newItems);

    onChange?.(newItems);
  };

  const handleCounterChange = (name: string, amount: number) => {
    const newItems = dropdownItems.map((item) => {
      if (item.name === name) {
        return { ...item, amount };
      }

      return item;
    });
    setDropdownItems(newItems);
    onChange?.(newItems);
  };

  useEffect(() => {
    const handleDocumentPointerDown = ({ target }: PointerEvent) => {
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

  useEffect(() => {
    setDropdownItems(items);
  }, [items]);

  const handleDropdownPointerDown = () => {
    setIsOpen(!isOpen);
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
            {dropdownItems.map(({ id, name, amount, maxValue }) => (
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
