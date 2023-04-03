import { FC } from 'react';

import './BulletList.scss';

type Props = {
  listItems: { text: string; id: number }[];
  labelName?: string;
};

const BulletList: FC<Props> = ({ labelName, listItems }) => {
  return (
    <div data-testid="bullet-list" className="bullet-list">
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
