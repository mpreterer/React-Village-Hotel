import { FC } from 'react';

import { Feature } from '../Feature/Feature';

import './FeatureList.scss';

interface IFeatureList {
  featureItems: Array<{
    label: string;
    description: string;
    imageName: string;
    id: number;
  }>;
}

const FeatureList: FC<IFeatureList> = ({ featureItems }) => {
  return (
    <div className="feature-list">
      {featureItems.map(({ label, description, imageName, id }) => {
        return (
          <div className="feature-list__item" key={id}>
            <Feature
              label={label}
              description={description}
              imageName={imageName}
            />
          </div>
        );
      })}
    </div>
  );
};

export { FeatureList };
