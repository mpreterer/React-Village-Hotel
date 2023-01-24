import { MouseEvent } from 'react';

import './Button.scss';

interface IButton {
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps = {
  text: '',
  onClick: () => {},
};

const Button = ({
  text = defaultProps.text,
  onClick = defaultProps.onClick,
}: IButton) => (
  <button onClick={onClick} className="button" type="button">
    {text}
  </button>
);

export { Button };
