import { FC, useState } from 'react';
import classnames from 'classnames';

import './LikeButton.scss';

interface ILikeButton {
  likesAmount: number;
  isLiked: boolean;
  onClick?: (status: boolean) => void;
}

const LikeButton: FC<ILikeButton> = ({ likesAmount, isLiked, onClick }) => {
  const [isLikedState, setLikedState] = useState<boolean>(isLiked);
  const [likesAmountState, setLikesAmountState] = useState<number>(likesAmount);

  const handleButtonClick = () => {
    const amount = isLikedState ? likesAmountState - 1 : likesAmountState + 1;
    setLikesAmountState(amount);
    setLikedState(!isLikedState);
    onClick?.(!isLikedState);
  };

  return (
    <button
      type="button"
      className={classnames('like-button', {
        'like-button_liked': isLikedState,
      })}
      onClick={handleButtonClick}
    >
      <span className="like-button__counter">{likesAmountState}</span>
    </button>
  );
};

export { LikeButton };
