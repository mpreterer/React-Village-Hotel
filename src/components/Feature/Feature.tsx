import { FC } from 'react';

import './Feature.scss';

type Props = {
  label: string;
  description: string;
  imageName: string;
};

const Feature: FC<Props> = ({ label, description, imageName }) => {
  return (
    <div data-testid="feature" className="feature">
      <span className="material-icons">{imageName}</span>
      <span className="feature__name">{label}</span>
      <span className="feature__description">{description}</span>
    </div>
  );
};

export { Feature };
