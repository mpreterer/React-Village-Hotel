import { FC } from 'react';

import Feature from '../Feature/Feature';

import './FeatureList.scss';

interface IFeatureList {
  featureItems: Array<{
    label: string;
    description: string;
    imageName: string;
    id: number;
  }>;
}

const defaultProps = {
  featureItems: [
    {
      label: '',
      description: '',
      imageName: '',
      id: 0,
    },
  ],
};

const FeatureList: FC<IFeatureList> = ({
  featureItems = defaultProps.featureItems,
}) => {
  let list = null;
  if (featureItems.length) {
    list = featureItems.map(({ label, description, imageName, id }) => {
      return (
        <div className="feature-list__item" key={id}>
          <Feature
            label={label}
            description={description}
            imageName={imageName}
          />
        </div>
      );
    });
  }

  return <div className="feature-list">{list}</div>;
};

export { FeatureList };
