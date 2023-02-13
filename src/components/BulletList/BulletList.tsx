import { FC } from 'react';

import './BulletList.scss';

type Props = {
  labelName: string;
  listItems: { text: string; id: number }[];
};

const BulletList: FC<Props> = ({ labelName, listItems }) => {
  return (
    <div className="bullet-list">
      {labelName}
      <ul className="bullet-list__wrapper">
        {listItems.map(({ text, id }) => (
          <li className="bullet-list__item" key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { BulletList };
