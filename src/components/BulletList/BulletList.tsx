import { FC } from 'react';

import './BulletList.scss';

interface IBulletList {
  labelName: string;
  listItems: Array<{ text: string; id: number }>;
}

const defaultProps = {
  labelName: '',
  listItems: [],
};

const BulletList: FC<IBulletList> = ({
  labelName = defaultProps.labelName,
  listItems = defaultProps.listItems,
}) => {
  return (
    <div className="bullet-list">
      {labelName}
      <ul className="bullet-list__wrapper">
        {listItems.map(({ text, id }) => (
          <li className="bullet-list__item" key={id}>
            {' '}
            {text}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { BulletList };
