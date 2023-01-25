import { FC } from 'react';

import Feature from '../Feature/Feature';

import './FeatureList.scss';

interface IFeatureList {
  featureItems: Array<{
    label: string;
    description: string;
    imagePath: string;
    id: number;
  }>;
}

const defaultProps = {
  featureItems: [
    {
      label: '',
      description: '',
      imagePath: '',
      id: 0,
    },
  ],
};

const FeatureList: FC<IFeatureList> = ({
  featureItems = defaultProps.featureItems,
}) => {
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

export { FeatureList };
