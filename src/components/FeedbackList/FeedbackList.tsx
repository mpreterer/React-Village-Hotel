import { FC } from 'react';

import { useAppSelector } from '../../hooks/redux';
import Feedback from '../Feedback/Feedback';

const FeedbackList: FC = () => {
  const feedbackItems = useAppSelector((state) => state.feedbackList);

  let list = null;
  if (feedbackItems.length) {
    list = feedbackItems.map((item) => {
      const { userName, date, text, likesAmount, isLiked, imagePath, id } =
        item;
      return (
        <Feedback
          key={id}
          userName={userName}
          date={date}
          text={text}
          likesAmount={likesAmount}
          isLiked={isLiked}
          imagePath={imagePath}
        />
      );
    });
  }

  return <div className="feedback-list">{list}</div>;
};

export default FeedbackList;
