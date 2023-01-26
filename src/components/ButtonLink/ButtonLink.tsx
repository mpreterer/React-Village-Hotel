import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './ButtonLink.scss';

type Props = {
  text: string;
  href?: string;
  withBorder?: boolean;
  isSmall?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const ButtonLink: FC<Props> = ({
  text,
  href = '/mock-address/change-me',
  withBorder = false,
  isSmall = false,
  onClick,
}) => (
  <Link
    onClick={onClick}
    to={href}
    className={classnames('button-link', {
      'button-link_bordered': withBorder,
      'button-link_size_small': isSmall,
    })}
  >
    {text}
  </Link>
);

export { ButtonLink };
