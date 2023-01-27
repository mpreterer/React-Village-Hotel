import { FC, useState } from 'react';

import './Rate.scss';

type Props = {
  rateNumber: number;
  onClick?: (value: number) => void;
};

const Rate: FC<Props> = ({ rateNumber, onClick }) => {
  const [currentRateNumber, setCurrentRateNumber] = useState(rateNumber);

  const handleStarIconClick = (value: number) => {
    setCurrentRateNumber(value);
    onClick?.(value);
  };

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
