import { FC } from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  items: { name: string }[];
  activeItem: string;
  onChange: (name: string) => void;
};

const Tabs: FC<Props> = ({ items, activeItem, onChange }) => {
  const handleButtonPointerDown = (name: string) => {
    onChange(name);
  };

  return (
    <div className="tabs">
      {items.map(({ name }) => (
        <button
          className={classNames('tabs__item', {
            tabs__item_active: name === activeItem,
          })}
          key={name}
          type="button"
          onPointerDown={() => handleButtonPointerDown(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export { Tabs };
