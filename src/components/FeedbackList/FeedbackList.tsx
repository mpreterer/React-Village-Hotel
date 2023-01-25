import { FC } from 'react';

import Feedback from '../Feedback/Feedback';

interface IFeedbackListState {
  feedbackItems: Array<{
    userName: string;
    date: string;
    text: string;
    imagePath: string;
    likesAmount: number;
    isLiked: boolean;
    id: number;
  }>;
}

const defaultProps = {
  feedbackItems: [
    {
      userName: '',
      date: '',
      text: '',
      imagePath: '',
      likesAmount: 0,
      isLiked: false,
      id: 0,
    },
  ],
};

const FeedbackList: FC<IFeedbackListState> = ({
  feedbackItems = defaultProps.feedbackItems,
}) => {
  return (
    <div className="feedback-list">
      {feedbackItems.map(
        ({ userName, date, text, likesAmount, isLiked, imagePath, id }) => {
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
        }
      )}
    </div>
  );
};

export { FeedbackList };
