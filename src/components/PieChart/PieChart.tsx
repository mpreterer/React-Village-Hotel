import { FC, FocusEvent, PointerEvent, useState } from 'react';

import { getUniqueArray } from '../../shared/helpers/getUniqueArray/getUniqueArray';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';

import { PIE_CHART_ITEMS, VOTES_DECLINATIONS } from './constants';
import './PieChart.scss';

type PieChartItem = {
  rating: number;
  count: number;
};

type Props = {
  items: PieChartItem[];
};

const PieChart: FC<Props> = ({ items }) => {
  const [votesId, setVotesId] = useState(0);

  const uniqueItems = getUniqueArray<PieChartItem>(items, 'rating');

  const correctItems = uniqueItems.filter(
    (item) =>
      item.count > 0 &&
      PIE_CHART_ITEMS.find((chartItem) => chartItem.rating === item.rating)
  );

  const totalVotes = correctItems.reduce(
    (votes, item) => item.count + votes,
    0
  );

  let strokeDashOffsetCount = 0;
  let strokeDashArrayCount = 0;

  const pieChartItems = correctItems
    .map((item) => {
      strokeDashOffsetCount = -(
        strokeDashArrayCount -
        strokeDashOffsetCount +
        2
      );

      strokeDashArrayCount = (item.count / totalVotes) * 360;

      const pieChartItem = PIE_CHART_ITEMS.find(
        (chartItem) => chartItem.rating === item.rating
      );

      return {
        ...item,
        ...pieChartItem,
        strokeDashArray: strokeDashArrayCount,
        strokeDashOffset: strokeDashOffsetCount,
      };
    })
    .filter((item) => item.count > 0);

  const currentItem = pieChartItems.find((item) => item.rating === votesId);

  const pieChartPointerOverHandler = ({ currentTarget }: PointerEvent) => {
    setVotesId(Number(currentTarget.id));
  };

  const pieChartPointerOutHandler = () => {
    setVotesId(0);
  };

  const pieChartFocusHandler = ({ currentTarget }: FocusEvent) => {
    setVotesId(Number(currentTarget.id));
  };

  const pieChartBlurHandler = () => {
    setVotesId(0);
  };

  return (
    <div className="pie-chart">
      <div className="pie-chart__chart">
        <svg className="pie-chart__body" viewBox="0 0 120 120">
          {pieChartItems.map(({ rating, firstColorLine, secondColorLine }) => {
            return (
              <linearGradient
                key={rating}
                id={`${rating}`}
                x1="1"
                y1="0"
                x2="0"
                y2="0"
              >
                <stop offset="0%" stopColor={firstColorLine} />
                <stop offset="100%" stopColor={secondColorLine} />
              </linearGradient>
            );
          })}
          {pieChartItems.map(
            ({ rating, strokeDashArray, strokeDashOffset }) => {
              return (
                <circle
                  id={String(rating)}
                  key={rating}
                  tabIndex={0}
                  className="pie-chart__line"
                  cx="50%"
                  cy="50%"
                  r="58"
                  strokeWidth={votesId === rating ? '24' : '4'}
                  stroke={`url(#${rating})`}
                  strokeDasharray={
                    pieChartItems.length > 1 ? `${strokeDashArray}, 360` : '0'
                  }
                  strokeDashoffset={strokeDashOffset}
                  onPointerOver={pieChartPointerOverHandler}
                  onPointerOut={pieChartPointerOutHandler}
                  onFocus={pieChartFocusHandler}
                  onBlur={pieChartBlurHandler}
                />
              );
            }
          )}
        </svg>
        <div className="pie-chart__votes">
          <h3
            className="pie-chart__votes-count"
            style={{
              color: `${currentItem?.textColor || ''}`,
            }}
          >
            {currentItem?.count || totalVotes}
          </h3>
          <h3
            className="pie-chart__votes-text"
            style={{
              color: `${currentItem?.textColor || ''}`,
            }}
          >
            {getWordDeclension(
              currentItem?.count || totalVotes,
              VOTES_DECLINATIONS
            )}
          </h3>
        </div>
      </div>
      <div className="pie-chart__legend">
        <ul className="pie-chart__legend-list">
          {pieChartItems
            .sort((a, b) => b.rating - a.rating)
            .map(({ rating, text, firstColorRound, secondColorRound }) => {
              return (
                <li
                  id={String(rating)}
                  key={rating}
                  className="pie-chart__legend-item"
                  onPointerOver={pieChartPointerOverHandler}
                  onPointerOut={pieChartPointerOutHandler}
                >
                  <span
                    className="pie-chart__legend-item-round"
                    style={{
                      background: `linear-gradient(180deg, ${
                        firstColorRound || '#919191'
                      } 0%, ${secondColorRound || '#3d4975'} 100%)`,
                    }}
                  />
                  {text}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export { PieChart };
