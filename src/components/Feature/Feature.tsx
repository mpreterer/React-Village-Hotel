import { FC } from 'react';

import './Feature.scss';

interface IFeature {
  label: string;
  description: string;
  imageName: string;
}

const Feature: FC<IFeature> = ({ label, description, imageName }) => {
  return (
    <div className="feature">
      <span className="material-icons">{imageName}</span>
      <span className="feature__name">{label}</span>
      <span className="feature__description">{description}</span>
    </div>
  );
};

export { Feature };
