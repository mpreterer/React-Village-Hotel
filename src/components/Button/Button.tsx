import { FC, MouseEvent } from 'react';

import './Button.scss';

type Props = {
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const defaultProps = {
  text: '',
  onClick: () => {},
};

const Button: FC<Props> = ({
  text = defaultProps.text,
  onClick = defaultProps.onClick,
}) => (
  <button onClick={onClick} className="button" type="button">
    {text}
  </button>
);

export { Button };
