import { FC } from 'react';
import classnames from 'classnames';

import './CheckBox.scss';

type Props = {
  label: string;
  name: string;
  isRich: boolean;
  description?: string;
  isChecked?: boolean;
  onChange?: (item: string, status: boolean) => void;
};

const CheckBox: FC<Props> = ({
  isRich,
  label,
  description,
  isChecked,
  name,
  onChange,
}) => {
  return (
    <li className="check-box">
      <label
        className={classnames('check-box__category', {
          'check-box__category_rich': isRich,
        })}
      >
        <input
          className="check-box__input"
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={(event) => onChange?.(name, event.target.checked)}
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

export { CheckBox };
