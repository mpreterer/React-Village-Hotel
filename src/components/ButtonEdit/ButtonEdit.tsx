import { FC, MouseEvent } from 'react';

import './ButtonEdit.scss';

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
const ButtonEdit: FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="button-edit material-icons-outlined"
      onClick={onClick}
    >
      edit
    </button>
  );
};

export { ButtonEdit };
