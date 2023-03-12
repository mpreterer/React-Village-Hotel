import { Feedback, FeedbackValue } from '../../../types/Feedback';

const changeFeedbackInfo = <T>(
  userId: string,
  param: 'date' | 'profilePicture' | 'userName' | 'text',
  value: T,
  feedback?: Feedback
): Feedback | undefined => {
  let newFeedback;

  if (feedback) {
    const feedbackArr: [string, FeedbackValue][] = Object.entries(feedback).map(
      ([id, review]) => {
        if (review.userId === userId) {
          return [
            id,
            {
              ...review,
              [param]: value,
              feedback: changeFeedbackInfo<T>(
                userId,
                param,
                value,
                review.feedback
              ),
            },
          ];
        }

        return [
          id,
          {
            ...review,
            feedback: changeFeedbackInfo<T>(
              userId,
              param,
              value,
              review.feedback
            ),
          },
        ];
      }
    );

    newFeedback = Object.fromEntries(feedbackArr);
  }

  return newFeedback;
};

export { changeFeedbackInfo };
