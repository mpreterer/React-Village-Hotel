import { FC } from 'react';

import { Feature } from '../Feature/Feature';

import './FeatureList.scss';

type Props = {
  featureItems: {
    label: string;
    description: string;
    imageName: string;
    id: number;
  }[];
};

const FeatureList: FC<Props> = ({ featureItems }) => {
  return (
    <ul data-testid="feature-list" className="feature-list">
      {featureItems.map(({ label, description, imageName, id }) => (
        <li className="feature-list__item" key={id}>
          <Feature
            label={label}
            description={description}
            imageName={imageName}
          />
        </li>
      ))}
    </ul>
  );
};

export { FeatureList };
