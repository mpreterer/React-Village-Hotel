import { FC, FormEvent } from 'react';

import './SubmitButton.scss';

type Props = {
  text: string;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
};

const SubmitButton: FC<Props> = ({ text, onSubmit }) => (
  <button onSubmit={onSubmit} type="submit" className="submit-button">
    {text}
  </button>
);

export { SubmitButton };
