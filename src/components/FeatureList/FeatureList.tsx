import { FC } from 'react';

import { useAppSelector } from '../../hooks/redux';
import Feature from '../Feature/Feature';

import './FeatureList.scss';

const FeatureList: FC = () => {
  const featureItems = useAppSelector((state) => state.featureList);

  let list = null;
  if (featureItems.length) {
    list = featureItems.map((item) => {
      const { label, description, imagePath, id } = item;
      return (
        <div className="feature-list__item" key={id}>
          <Feature
            label={label}
            description={description}
            imagePath={imagePath}
          />
        </div>
      );
    });
  }

  return <div className="feature-list">{list}</div>;
};

export default FeatureList;
