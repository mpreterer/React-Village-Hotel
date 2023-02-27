import { FC } from 'react';

import { ReviewItemData } from '../../types/ReviewData';
import { Feedback } from '../Feedback/Feedback';

import './FeedbackList.scss';

type Props = {
  feedbackItems: [string, ReviewItemData][];
  path?: string;
  onSubmit?: (text: string, path: string) => void;
};

const FeedbackList: FC<Props> = ({ feedbackItems, path = '', onSubmit }) => {
  return (
    <div className="feedback-list">
      {feedbackItems.map(([reviewId, reviewBody]) => {
        return (
          <div key={reviewId}>
            <Feedback
              key={reviewId}
              name={reviewBody.userName}
              date={reviewBody.date}
              text={reviewBody.text}
              avatar=""
              likeCount={0}
              onSubmit={onSubmit}
              path={`${path}/${reviewId}`}
              // parentId={reviewId}
            />
            {reviewBody.reviews ? (
              <FeedbackList
                feedbackItems={Object.entries(reviewBody.reviews)}
                path={`${path}/${reviewId}`}
                onSubmit={onSubmit}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export { FeedbackList };
