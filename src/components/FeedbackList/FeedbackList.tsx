import { FC } from 'react';
import classNames from 'classnames';

import { FeedbackItemData } from '../../types/FeedbackData';
import { Feedback } from '../Feedback/Feedback';

import { sortFeedback } from './helpers';
import './FeedbackList.scss';

type Props = {
  feedbackItems: [string, FeedbackItemData][];
  userId?: string;
  isReplyAllowed?: boolean;
  path?: string;
  withMargin?: boolean;
  onClick?: (status: boolean, path: string) => void;
  onSubmit?: (text: string, path: string) => void;
};

const FeedbackList: FC<Props> = ({
  feedbackItems,
  userId = '',
  isReplyAllowed = false,
  path = '',
  withMargin = false,
  onClick,
  onSubmit,
}) => {
  return (
    <ul className="feedback-list">
      {sortFeedback(feedbackItems).map(
        ([feedbackId, { userName, date, text, feedback, likes }]) => {
          const likesArray = Object.values(likes ?? {});
          return (
            <li className="feedback-list__inner" key={feedbackId}>
              <Feedback
                key={feedbackId}
                name={userName}
                date={date}
                text={text}
                likeCount={likesArray.length}
                isLiked={
                  likesArray.findIndex((like) => like.userId === userId) !== -1
                }
                isReplyAllowed={isReplyAllowed}
                path={`${path}/${feedbackId}`}
                onSubmit={onSubmit}
                onClick={onClick}
              />
              {!!feedback && (
                <details
                  className={classNames('feedback-list__details', {
                    'feedback-list__details_with-margin': withMargin,
                  })}
                >
                  <summary className="feedback-list__summary">
                    Показать все ответы
                  </summary>
                  <FeedbackList
                    userId={userId}
                    feedbackItems={Object.entries(feedback)}
                    isReplyAllowed={isReplyAllowed}
                    path={`${path}/${feedbackId}`}
                    onSubmit={onSubmit}
                    onClick={onClick}
                  />
                </details>
              )}
            </li>
          );
        }
      )}
    </ul>
  );
};

export { FeedbackList };
