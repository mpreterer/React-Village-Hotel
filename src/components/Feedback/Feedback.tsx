import { FC, useCallback } from 'react';

import defaultAvatar from '../../assets/img/default-avatar.jpg';
import { getDateName } from '../../shared/helpers/getDateName/getDateName';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import { LikeButton } from '../LikeButton/LikeButton';

import './Feedback.scss';

type Props = {
  name: string;
  date: Date;
  text: string;
  avatar: string;
  likeCount: number;
  isLiked?: boolean;
  isReplyAllowed?: boolean;
  path?: string;
  onSubmit?: (parentId: string, text: string) => void;
};

const Feedback: FC<Props> = ({
  name,
  date,
  text,
  avatar,
  likeCount,
  isLiked = false,
  isReplyAllowed = false,
  path = '',
  onSubmit,
}) => {
  const handleReviewSubmit = useCallback(
    (replyText: string) => {
      onSubmit?.(`${path}`, replyText);
    },
    [onSubmit, path]
  );

  return (
    <div className="feedback">
      <img
        className="feedback__image"
        src={avatar || defaultAvatar}
        alt="аватар автора отзыва"
      />
      <span className="feedback__name">{name.toLowerCase()}</span>
      <span className="feedback__date">{`${getDateName(date)}`}</span>
      <div className="feedback__like">
        <LikeButton likesAmount={likeCount} isLiked={isLiked} />
      </div>
      <p className="feedback__description">{text}</p>
      {isReplyAllowed && (
        <details className="feedback__feedback-form">
          <summary className="feedback__summary">Ответить</summary>
          <FeedbackForm buttonText="Ответить" onSubmit={handleReviewSubmit} />
        </details>
      )}
    </div>
  );
};

export { Feedback };
