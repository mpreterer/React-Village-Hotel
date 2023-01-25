import { FC } from 'react';

import './CheckBox.scss';

type TProps = {
  label: string;
  name: string;
  description?: string;
  isChecked?: boolean;
  isRich: boolean;
};

const CheckBox: FC<TProps> = ({
  isRich,
  label,
  description,
  isChecked,
  name,
}) => {
  const handleCheckBoxChange = (item: string, status: boolean) => {
    // dispatch here
  };

  return (
    <li className="check-box">
      <label
        className={`check-box__category${
          isRich ? ' check-box__category_rich' : ''
        }`}
      >
        <input
          className="check-box__input"
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={(event) => handleCheckBoxChange(name, event.target.checked)}
        />
        <span className="check-box__check-mark" />
        <div className="check-box__text">
          <span className="check-box__name">{label}</span>
          {description && (
            <span className="check-box__description">{description}</span>
          )}
        </div>
      </label>
    </li>
  );
};

export default CheckBox;
