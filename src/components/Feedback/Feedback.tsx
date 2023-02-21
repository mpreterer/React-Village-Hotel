import { FC } from 'react';

import defaultAvatar from '../../assets/img/default-avatar.jpg';
import { getDateName } from '../../shared/helpers/getDateName/getDateName';
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
  isLiked = false,
  avatar,
}) => {
  return (
    <li className="feedback">
      <img
        className="feedback__image"
        src={avatar || defaultAvatar}
        alt="аватар автора отзыва"
      />
      <span className="feedback__name">{name.toLowerCase()}</span>
      <span className="feedback__date">{`${getDateName(date)} назад`}</span>
      <div className="feedback__like">
        <LikeButton likesAmount={likeCount} isLiked={isLiked} />
      </div>
      <p className="feedback__description">{text}</p>
    </li>
  );
};

export { Feedback };
