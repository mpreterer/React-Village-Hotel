import { FC } from 'react';

import { RADIUS } from './constants';
import './CharacterCounter.scss';

type Props = {
  maxCount: number;
  currentCount: number;
};

const CharacterCounter: FC<Props> = ({ maxCount, currentCount }) => {
  const value = currentCount > maxCount ? maxCount : currentCount;

  const percent = (value / maxCount) * 100;

  let strokeColor = '#BC9CFF';
  if (percent >= 50) {
    strokeColor = '#6FCF97';
  }
  if (percent >= 97) {
    strokeColor = '#BD2323';
  }

  const strokeDashoffset = 2 * Math.PI * RADIUS;
  const offset = strokeDashoffset - (percent / 100) * strokeDashoffset;

  return (
    <div className="character-counter">
      <svg className="character-counter__svg" viewBox="0 0 44 44">
        <circle
          fill="none"
          cx="22"
          cy="22"
          r={RADIUS}
          stroke="rgba(31, 32, 65, 0.12)"
          strokeWidth={4}
        />
        <circle
          className="character-counter__progress"
          cx="-22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke={strokeColor}
          strokeDasharray={`${strokeDashoffset} ${strokeDashoffset}`}
          strokeDashoffset={offset}
          style={{ transform: 'rotate(-90deg)' }}
          strokeWidth={4}
        />
        <text
          textAnchor="middle"
          x="22"
          y="26"
          fill={strokeColor}
          className="character-counter__text"
        >
          {value || ''}
        </text>
      </svg>
    </div>
  );
};

export { CharacterCounter };
