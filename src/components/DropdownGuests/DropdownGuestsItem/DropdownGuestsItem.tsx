import { FC, KeyboardEvent } from 'react';

import '../../../styles/DropdownItem.scss';

type Props = {
  name: string;
  amount: number;
  incrementDisabled?: boolean;
  onChangeCounter: (name: string, amount: number) => void;
};

const DropdownGuestsItem: FC<Props> = ({
  name,
  amount,
  incrementDisabled = false,
  onChangeCounter,
}) => {
  const handleIncrementPointerDown = () => {
    const newAmount = amount + 1;

    if (!incrementDisabled) {
      onChangeCounter(name, newAmount);
    }
  };

  const handleDecrementPointerDown = () => {
    const newAmount = amount - 1;

    if (newAmount >= 0) {
      onChangeCounter(name, newAmount);
    }
  };

  const handleIncrementKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();

      const newAmount = amount + 1;

      if (!incrementDisabled) {
        onChangeCounter(name, newAmount);
      }
    }
  };

  const handleDecrementKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();

      const newAmount = amount - 1;

      if (newAmount >= 0) {
        onChangeCounter(name, newAmount);
      }
    }
  };

  return (
    <li className="dropdown-item">
      <p className="dropdown-item__name">{name}</p>
      <div className="dropdown-item__controls">
        <button
          className="dropdown-item__button"
          type="button"
          onPointerDown={handleDecrementPointerDown}
          onKeyDown={handleDecrementKeyDown}
          disabled={amount <= 0}
        >
          -
        </button>
        <p
          data-testid="dropdown-guest-amount"
          className="dropdown-item__amount"
        >
          {amount}
        </p>
        <button
          className="dropdown-item__button"
          type="button"
          onPointerDown={handleIncrementPointerDown}
          onKeyDown={handleIncrementKeyDown}
          disabled={incrementDisabled}
        >
          +
        </button>
      </div>
    </li>
  );
};

export { DropdownGuestsItem };
