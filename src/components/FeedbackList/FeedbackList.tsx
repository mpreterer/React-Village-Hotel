import { FC } from 'react';

import { Feedback } from '../Feedback/Feedback';

type Props = {
  feedbackItems: {
    name: string;
    date: string;
    text: string;
    avatar: string;
    likeCount: number;
    isLiked?: boolean;
    id: number;
  }[];
};

const FeedbackList: FC<Props> = ({ feedbackItems }) => {
  return (
    <div className="feedback-list">
      {feedbackItems.map(
        ({ name, date, text, likeCount, isLiked, avatar, id }) => {
          return (
            <Feedback
              key={id}
              name={name}
              date={date}
              text={text}
              likeCount={likeCount}
              isLiked={isLiked}
              avatar={avatar}
            />
          );
        }
      )}
    </div>
  );
};

export { FeedbackList };
