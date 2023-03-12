import { FC, useState } from 'react';
import classnames from 'classnames';

import './LikeButton.scss';

type Props = {
  likesAmount: number;
  isLiked: boolean;
  isActive?: boolean;
  onClick?: (status: boolean) => void;
};

const LikeButton: FC<Props> = ({
  likesAmount,
  isLiked,
  isActive = false,
  onClick,
}) => {
  const [isLikedState, setLikedState] = useState<boolean>(isLiked);
  const [likesAmountState, setLikesAmountState] = useState<number>(likesAmount);
  const handleButtonClick = () => {
    const amount = isLikedState ? likesAmountState - 1 : likesAmountState + 1;
    setLikesAmountState(amount);
    const newLikeState = !isLikedState;
    setLikedState(newLikeState);
    onClick?.(newLikeState);
  };

  return (
    <button
      type="button"
      className={classnames('like-button', {
        'like-button_liked': isLikedState,
      })}
      disabled={!isActive}
      onClick={handleButtonClick}
    >
      <span className="like-button__counter">{likesAmountState}</span>
    </button>
  );
};

export { LikeButton };
