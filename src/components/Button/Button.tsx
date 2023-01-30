import { FC, KeyboardEvent, MouseEvent, PointerEvent } from 'react';

import './Button.scss';

type Props = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ text, onClick, onKeyDown, onPointerDown }) => (
  <button
    onPointerDown={onPointerDown}
    onKeyDown={onKeyDown}
    onClick={onClick}
    className="button"
    type="button"
  >
    {text}
  </button>
);

export { Button };
