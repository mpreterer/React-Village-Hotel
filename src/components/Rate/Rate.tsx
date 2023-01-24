import { useCallback, useState } from 'react';

import './Rate.scss';

interface IRate {
  rateNumber?: number;
  onClick?: (value: number) => void;
}

const defaultProps = {
  rateNumber: 1,
  onClick: () => {},
};

const Rate = ({
  rateNumber = defaultProps.rateNumber,
  onClick = defaultProps.onClick,
}: IRate) => {
  const [currentRateNumber, setNewCurrentRateNumber] = useState(rateNumber);

  const handleStarIconClick = useCallback(
    (value: number) => {
      setNewCurrentRateNumber(value);
      onClick(value);
    },
    [onClick]
  );

  return (
    <div className="rate">
      {[1, 2, 3, 4, 5].map((value, index) => {
        const iconName = value <= currentRateNumber ? 'star' : 'star_border';
        return (
          <span
            role="button"
            onClick={() => {
              handleStarIconClick(value);
            }}
            onKeyDown={() => handleStarIconClick(value)}
            key={value}
            className="rate__icon"
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
