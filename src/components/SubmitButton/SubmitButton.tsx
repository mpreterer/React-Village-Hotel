import { FC, FormEvent } from 'react';

import './SubmitButton.scss';

type Props = {
  text?: string;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
};

const defaultProps = {
  text: '',
  onSubmit: () => {},
};

const SubmitButton: FC<Props> = ({
  text = defaultProps.text,
  onSubmit = defaultProps.onSubmit,
}) => (
  <button onSubmit={onSubmit} type="submit" className="submit-button">
    {text}
  </button>
);

export { SubmitButton };
