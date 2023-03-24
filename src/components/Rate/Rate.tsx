import { FC } from 'react';
import classNames from 'classnames';

import './Rate.scss';

type Props = {
  rateNumber: number;
  isActive?: boolean;
  onClick?: (value: number) => void;
};

const Rate: FC<Props> = ({ rateNumber, isActive = false, onClick }) => {
  const handleStarIconClick = (value: number) => {
    if (!isActive) return;
    onClick?.(value);
  };

  return (
    <div className="rate">
      {[1, 2, 3, 4, 5].map((value, index) => {
        const iconName = value <= rateNumber ? 'star' : 'star_border';
        return (
          <span
            role="button"
            onClick={() => {
              handleStarIconClick(value);
            }}
            onKeyDown={() => handleStarIconClick(value)}
            key={value}
            className={classNames('rate__icon', {
              rate__icon_inactive: !isActive,
            })}
            tabIndex={index}
          >
            {iconName}
          </span>
        );
      })}
    </div>
  );
};

export { Rate };
