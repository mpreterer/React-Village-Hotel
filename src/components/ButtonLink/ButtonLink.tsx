import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './ButtonLink.scss';

interface IButtonLink {
  text?: string;
  href?: string;
  withBorder?: boolean;
  isSmall?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const defaultProps = {
  text: '',
  href: '/mock-address/change-me',
  withBorder: false,
  isSmall: false,
  onClick: () => {},
};

const ButtonLink = ({
  text = defaultProps.text,
  href = defaultProps.href,
  withBorder = defaultProps.withBorder,
  isSmall = defaultProps.isSmall,
  onClick = defaultProps.onClick,
}: IButtonLink) => (
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
