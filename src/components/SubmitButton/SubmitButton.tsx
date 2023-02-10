import { FC, FormEvent } from 'react';

import './SubmitButton.scss';

type Props = {
  text: string;
  disabled?: boolean;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
};

const SubmitButton: FC<Props> = ({ text, disabled = false, onSubmit }) => (
  <button
    disabled={disabled}
    onSubmit={onSubmit}
    type="submit"
    className="submit-button"
  >
    {text}
  </button>
);

export { SubmitButton };
