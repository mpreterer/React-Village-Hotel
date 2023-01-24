import { FormEvent } from 'react';

import './SubmitButton.scss';

interface ISubmitButton {
  text?: string;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
}
const defaultProps = {
  text: '',
  onSubmit: () => {},
};

const SubmitButton = ({
  text = defaultProps.text,
  onSubmit = defaultProps.onSubmit,
}: ISubmitButton) => (
  <button onSubmit={onSubmit} type="submit" className="submit-button">
    {text}
  </button>
);

export { SubmitButton };
