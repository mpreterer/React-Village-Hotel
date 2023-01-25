import { FC } from 'react';

import './Feature.scss';

type TProps = {
  label: string;
  description: string;
  imagePath: string;
};

const Feature: FC<TProps> = ({ label, description, imagePath }) => {
  return (
    <div className="feature">
      <div className="feature__image-wrapper">
        <img src={imagePath} alt={description} />
      </div>
      <span className="feature__name">{label}</span>
      <span className="feature__description">{description}</span>
    </div>
  );
};

export default Feature;
