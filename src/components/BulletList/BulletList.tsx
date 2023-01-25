import { FC } from 'react';

import { useAppSelector } from '../../hooks/redux';

import './BulletList.scss';

const BulletList: FC = () => {
  const bulletList = useAppSelector((state) => state.bulletList);
  const { labelName, listItems } = bulletList;

  let list = null;
  if (listItems) {
    list = listItems.map((value) => {
      const { text, id } = value;
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

export default BulletList;
