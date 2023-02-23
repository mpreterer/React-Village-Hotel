import { FC, KeyboardEvent, MouseEvent, PointerEvent } from 'react';
import classnames from 'classnames';

import './Button.scss';

type Props = {
  text: string;
  withBorder?: boolean;
  withBackground?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({
  text,
  withBorder = false,
  withBackground = false,
  onClick,
  onKeyDown,
  onPointerDown,
}) => (
  <button
    onPointerDown={onPointerDown}
    onKeyDown={onKeyDown}
    onClick={onClick}
    className={classnames('button', {
      'button__special button__special_bordered': withBorder,
      'button__special button__special_background': withBackground,
    })}
    type="button"
  >
    {text}
  </button>
);

export { Button };
