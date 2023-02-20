import { FC } from 'react';

import './Toggle.scss';

type Props = {
  text: string;
  isChecked?: boolean;
};

const Toggle: FC<Props> = ({ text, isChecked = false }) => {
  return (
    <label className="toggle">
      <input type="checkbox" checked={isChecked} className="toggle__input" />
      <span className="toggle__slider" />
      <span className="toggle__text">{text}</span>
    </label>
  );
};

export { Toggle };
