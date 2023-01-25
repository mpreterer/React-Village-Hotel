import { FC } from 'react';

import './Feature.scss';
import 'material-icons/iconfont/material-icons.css';

type TProps = {
  label: string;
  description: string;
  imagePath: string;
};

const Feature: FC<TProps> = ({ label, description, imagePath }) => {
  return (
    <div className="feature">
      <span className="material-icons">{imagePath}</span>
      <span className="feature__name">{label}</span>
      <span className="feature__description">{description}</span>
    </div>
  );
};

export default Feature;
