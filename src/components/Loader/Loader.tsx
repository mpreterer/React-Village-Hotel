import { FC } from 'react';

import './Loader.scss';

const Loader: FC = () => {
  return (
    <div className="loader">
      <div className="loader__spinner" />
    </div>
  );
};

export { Loader };
