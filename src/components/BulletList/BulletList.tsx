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
  let list = null;
  if (listItems) {
    list = listItems.map(({ text, id }) => {
      return (
        <li className="bullet-list__item" key={id}>
          {text}
        </li>
      );
    });
  }

  return (
    <div className="bullet-list">
      {labelName}
      {list && <ul className="bullet-list__wrapper">{list}</ul>}
    </div>
  );
};

export { BulletList };
