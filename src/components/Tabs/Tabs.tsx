import { FC, useState } from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  items: { name: string }[];
  onChange: (name: string) => void;
};

const Tabs: FC<Props> = ({ items, onChange }) => {
  const [activeName, setActiveName] = useState('все');

  const handleButtonClick = (name: string) => {
    setActiveName(name);
    onChange(name);
  };

  return (
    <div className="tabs">
      {items.map(({ name }) => (
        <button
          className={classNames('tabs__item', {
            tabs__item_active: name === activeName,
          })}
          key={name}
          type="button"
          onPointerDown={() => handleButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export { Tabs };
