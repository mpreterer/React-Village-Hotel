import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { getUniqueArray } from '../../shared/helpers/getUniqueArray/getUniqueArray';

import { DropdownItem } from './DropdownItem/DropdownItem';
import {
  DropdownItemData,
  DropdownItemsDeclensions,
  getCorrectDropdownValue,
} from './helpers';
import '../../styles/Dropdown.scss';

type Props = {
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
  onChange,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState(
    getUniqueArray(items, 'id')
  );

  const handleCounterChange = (name: string, amount: number) => {
    const newItems = dropdownItems.map((item) => {
      let currentItem = item;

      if (item.name === name) {
        currentItem = {
          ...item,
          amount,
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
          value={getCorrectDropdownValue(dropdownItems, declensions).join(', ')}
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
        </div>
      </div>
    </div>
  );
};

export { Dropdown };
