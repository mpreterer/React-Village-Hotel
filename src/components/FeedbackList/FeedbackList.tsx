import { FC } from 'react';

import { ReviewItemData } from '../../types/ReviewData';
import { Feedback } from '../Feedback/Feedback';

import './FeedbackList.scss';

type Props = {
  feedbackItems: [string, ReviewItemData][];
  isCollapsed?: boolean;
  path?: string;
  onSubmit?: (text: string, path: string) => void;
};

const FeedbackList: FC<Props> = ({
  feedbackItems,
  isCollapsed = true,
  path = '',
  onSubmit,
}) => {
  return (
    <ul className="feedback-list">
      {feedbackItems.map(([reviewId, reviewBody]) => {
        return (
          <li className="feedback-list__inner" key={reviewId}>
            <Feedback
              key={reviewId}
              name={reviewBody.userName}
              date={reviewBody.date}
              text={reviewBody.text}
              avatar=""
              likeCount={0}
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
