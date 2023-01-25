import { FC } from 'react';

import LikeButton from '../LikeButton/LikeButton';

import './Feedback.scss';

type TProps = {
  userName: string;
  date: string;
  text: string;
  imagePath: string;
  likesAmount: number;
  isLiked: boolean;
};

const Feedback: FC<TProps> = ({
  userName,
  date,
  text,
  likesAmount,
  isLiked,
  imagePath,
}) => {
  return (
    <article className="feedback">
      <img
        className="feedback__image"
        src={imagePath}
        alt="аватар автора отзыва"
      />
      <span className="feedback__name">{userName}</span>
      <span className="feedback__date">{date}</span>
      <div className="feedback__like">
        <LikeButton likesAmount={likesAmount} isLiked={isLiked} />
      </div>
      <p className="feedback__description">{text}</p>
    </article>
  );
};

export default Feedback;
