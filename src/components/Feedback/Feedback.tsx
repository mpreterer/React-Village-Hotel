import { FC } from 'react';

import { LikeButton } from '../LikeButton/LikeButton';

import './Feedback.scss';

type Props = {
  name: string;
  date: string;
  text: string;
  avatar: string;
  likeCount: number;
  isLiked?: boolean;
};

const Feedback: FC<Props> = ({
  name,
  date,
  text,
  likeCount,
  isLiked,
  avatar,
}) => {
  return (
    <article className="feedback">
      <img
        className="feedback__image"
        src={avatar}
        alt="аватар автора отзыва"
      />
      <span className="feedback__name">{name}</span>
      <span className="feedback__date">{date}</span>
      <div className="feedback__like">
        <LikeButton likesAmount={likeCount} isLiked={!!isLiked} />
      </div>
      <p className="feedback__description">{text}</p>
    </article>
  );
};

export { Feedback };
