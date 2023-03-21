import { ChangeEvent, FC } from 'react';

import './Toggle.scss';

type Props = {
  text: string;
  name?: string;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: FC<Props> = ({
  text,
  name = '',
  isChecked = false,
  onChange,
}) => {
  return (
    <label data-testid="toggle" className="toggle">
      <input
        data-testid="toggle-input"
        onChange={onChange}
        type="checkbox"
        name={name}
        defaultChecked={isChecked}
        className="toggle__input"
      />
      <span className="toggle__slider" />
      <span className="toggle__text">{text}</span>
    </label>
  );
};

export { Toggle };
