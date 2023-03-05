import { FC } from 'react';

import { FeedbackItemData } from '../../types/FeedbackData';
import { Feedback } from '../Feedback/Feedback';

import { sortFeedback } from './helpers';
import './FeedbackList.scss';

type Props = {
  feedbackItems: [string, FeedbackItemData][];
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
      {sortFeedback(feedbackItems).map(
        ([feedbackId, { userName, date, text, feedback }]) => (
          <li className="feedback-list__inner" key={feedbackId}>
            <Feedback
              key={feedbackId}
              name={userName}
              date={date}
              text={text}
              likeCount={0}
              isReplyAllowed={isReplyAllowed}
              onSubmit={onSubmit}
              path={`${path}/${feedbackId}`}
            />
            {!!feedback && (
              <details className="feedback-list__details">
                <summary className="feedback-list__summary">
                  Показать все ответы
                </summary>
                <FeedbackList
                  feedbackItems={Object.entries(feedback)}
                  isReplyAllowed={isReplyAllowed}
                  path={`${path}/${feedbackId}`}
                  onSubmit={onSubmit}
                />
              </details>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export { FeedbackList };
