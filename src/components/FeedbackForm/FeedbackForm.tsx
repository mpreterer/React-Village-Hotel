import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { SubmitButton } from '../SubmitButton/SubmitButton';

import { CharacterCounter } from './CharacterCounter/CharacterCounter';
import './FeedbackForm.scss';

const MAX_TEXT_COUNT = 500;

const FeedbackForm: FC = () => {
  const [text, setText] = useState('');

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <form className="feedback-form" onSubmit={handleSubmitForm}>
      <div className="feedback-form__info">
        <h3 className="feedback-form__title">Оставить отзыв</h3>
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
        <SubmitButton text="Отправить отзыв" />
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
