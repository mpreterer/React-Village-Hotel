import { FC } from 'react';

import { ReviewItemData } from '../../types/ReviewData';
import { Feedback } from '../Feedback/Feedback';

import { sortFeedback } from './helpers';
import './FeedbackList.scss';

type Props = {
  feedbackItems: [string, ReviewItemData][];
  isReplyAllowed?: boolean;
  path?: string;
  onSubmit?: (text: string, path: string) => void;
};

const FeedbackList: FC<Props> = ({
  feedbackItems,
  isReplyAllowed = false,
  path = '',
  onSubmit,
}) => {
  return (
    <ul className="feedback-list">
      {sortFeedback(feedbackItems).map(([reviewId, reviewBody]) => {
        return (
          <li className="feedback-list__inner" key={reviewId}>
            <Feedback
              key={reviewId}
              name={reviewBody.userName}
              date={reviewBody.date}
              text={reviewBody.text}
              avatar=""
              likeCount={0}
              isReplyAllowed={isReplyAllowed}
              onSubmit={onSubmit}
              path={`${path}/${reviewId}`}
            />
            {reviewBody.reviews ? (
              <details className="feedback-list__details">
                <summary className="feedback-list__summary">
                  Показать все ответы
                </summary>
                <FeedbackList
                  feedbackItems={Object.entries(reviewBody.reviews)}
                  isReplyAllowed={isReplyAllowed}
                  path={`${path}/${reviewId}`}
                  onSubmit={onSubmit}
                />
              </details>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export { FeedbackList };
