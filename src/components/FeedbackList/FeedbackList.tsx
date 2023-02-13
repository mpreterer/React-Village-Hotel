import { FC } from 'react';

import { Feedback } from '../Feedback/Feedback';

import './FeedbackList.scss';

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
            <div className="feedback-list__item" key={id}>
              <Feedback
                name={name}
                date={date}
                text={text}
                likeCount={likeCount}
                isLiked={isLiked}
                avatar={avatar}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export { FeedbackList };
