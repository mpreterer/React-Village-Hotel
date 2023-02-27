import { ChangeEvent, FC, FormEvent, useState } from 'react';
import classNames from 'classnames';

import { SubmitButton } from '../SubmitButton/SubmitButton';

import { CharacterCounter } from './CharacterCounter/CharacterCounter';
import './FeedbackForm.scss';

const MAX_TEXT_COUNT = 500;
type Props = {
  isCollapsed?: boolean;
  title?: string;
  buttonText?: string;
  onSubmit?: (text: string) => void;
  onClick?: () => void;
};

const FeedbackForm: FC<Props> = ({
  isCollapsed = false,
  title = 'Оставить отзыв',
  buttonText = 'Отправить отзыв',
  onSubmit,
  onClick,
}) => {
  const [text, setText] = useState('');
  const [isFormCollapsed, setIsFormCollapsed] = useState(isCollapsed);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(text);
    setText('');
    if (isCollapsed) setIsFormCollapsed(true);
  };

  const handleTextareaChange = ({
    currentTarget,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = currentTarget;
    if (value.length <= MAX_TEXT_COUNT) {
      setText(currentTarget.value);
    }
  };

  return (
    <form
      className={classNames('feedback-form', {
        'feedback-form_collapsed': isFormCollapsed,
      })}
      onSubmit={handleSubmitForm}
    >
      <div className="feedback-form__info">
        <button
          className="feedback-form__title-container"
          type="button"
          onClick={() => setIsFormCollapsed(!isFormCollapsed)}
        >
          <h3 className="feedback-form__title">{title}</h3>
        </button>
        <p className="feedback-form__text">
          <span className="feedback-form__text-value">{text.length}</span> / 500
          символов
        </p>
      </div>
      <textarea
        className="feedback-form__textarea"
        value={text}
        placeholder="Введите текст"
        onChange={handleTextareaChange}
      />
      <div className="feedback-form__buttons">
        <SubmitButton text={buttonText} />
        <div className="feedback-form__character-counter">
          <CharacterCounter
            maxCount={MAX_TEXT_COUNT}
            currentCount={text.length}
          />
        </div>
      </div>
    </form>
  );
};

export { FeedbackForm };
