import { FC, useState } from 'react';

import { declination } from '../../shared/helpers/declination/declination';
import { getUniqueArray } from '../../shared/helpers/uniqueArray/uniqueArray';

import { PIE_CHART_ITEMS, VOTES_DECLINATIONS } from './constants';
import './PieChart.scss';

type PieChartItem = {
  id: string;
  votes: number;
};

type Props = {
  items: PieChartItem[];
};

const PieChart: FC<Props> = ({ items }) => {
  const [votesId, setVotesId] = useState('');

  const uniqueItems = getUniqueArray<PieChartItem>(items, 'id');

  const correctItems = uniqueItems.filter(
    (item) =>
      item.votes > 0 &&
      PIE_CHART_ITEMS.find((chartItem) => chartItem.id === item.id)
  );

  const totalVotes = correctItems.reduce(
    (votes, item) => item.votes + votes,
    0
  );

  let strokeDashoffsetCount = 0;
  let strokeDasharrayCount = 0;

  const pieChartItems = correctItems
    .map((item) => {
      strokeDashoffsetCount = -(
        strokeDasharrayCount -
        strokeDashoffsetCount +
        2
      );

      strokeDasharrayCount = (item.votes / totalVotes) * 360;

      const pieChartItem = PIE_CHART_ITEMS.find(
        (chartItem) => chartItem.id === item.id
      );

      return {
        ...item,
        ...pieChartItem,
        strokeDasharray: strokeDasharrayCount,
        strokeDashoffset: strokeDashoffsetCount,
      };
    })
    .filter((item) => item.votes > 0);

  const currentItem = pieChartItems.find((item) => item.id === votesId);

  const pieChartPointerOverHandler = ({
    currentTarget,
  }: React.PointerEvent) => {
    const { id } = currentTarget;
    setVotesId(id);
  };

  const pieChartPointerOutHandler = () => {
    setVotesId('');
  };

  const pieChartFocusHandler = ({ currentTarget }: React.FocusEvent) => {
    const { id } = currentTarget;
    setVotesId(id);
  };

  const pieChartBlurHandler = () => {
    setVotesId('');
  };

  return (
    <div className="pie-chart">
      <div className="pie-chart__chart">
        <svg className="pie-chart__body" viewBox="0 0 120 120">
          {pieChartItems.map(({ id, firstColor, secondColor }) => {
            return (
              <linearGradient key={id} id={`${id}`} x1="1" y1="0" x2="0" y2="0">
                <stop offset="100%" stopColor={firstColor} />
                <stop offset="100%" stopColor={secondColor} />
              </linearGradient>
            );
          })}
          {pieChartItems.map(({ id, strokeDasharray, strokeDashoffset }) => {
            return (
              <circle
                id={id}
                key={id}
                tabIndex={0}
                className="pie-chart__line"
                cx="50%"
                cy="50%"
                r="58"
                strokeWidth={votesId === id ? '24' : '4'}
                stroke={`url(#${id})`}
                strokeDasharray={`${strokeDasharray}, 360`}
                strokeDashoffset={strokeDashoffset}
                onPointerOver={pieChartPointerOverHandler}
                onPointerOut={pieChartPointerOutHandler}
                onFocus={pieChartFocusHandler}
                onBlur={pieChartBlurHandler}
              />
            );
          })}
        </svg>
        <div className="pie-chart__votes">
          <h3
            className="pie-chart__votes-count"
            style={{
              color: `${currentItem?.textColor || ''}`,
            }}
          >
            {currentItem?.votes || totalVotes}
          </h3>
          <h3
            className="pie-chart__votes-text"
            style={{
              color: `${currentItem?.textColor || ''}`,
            }}
          >
            {declination(currentItem?.votes || totalVotes, VOTES_DECLINATIONS)}
          </h3>
        </div>
      </div>
      <div className="pie-chart__legend">
        <ul className="pie-chart__legend-list">
          {pieChartItems
            .reverse()
            .map(({ id, text, firstColor, secondColor }) => {
              return (
                <li
                  id={id}
                  key={id}
                  className="pie-chart__legend-item"
                  onPointerOver={pieChartPointerOverHandler}
                  onPointerOut={pieChartPointerOutHandler}
                >
                  <span
                    className="pie-chart__legend-item-round"
                    style={{
                      background: `linear-gradient(180deg, ${
                        firstColor || '#919191'
                      } 0%, ${secondColor || '#3d4975'} 100%)`,
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
