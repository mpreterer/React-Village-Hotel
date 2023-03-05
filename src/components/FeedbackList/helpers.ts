import { FeedbackItemData } from '../../types/FeedbackData';

const sortFeedback = (feedbackList: [string, FeedbackItemData][]) =>
  feedbackList.sort((a, b) => (a[1].date < b[1].date ? 1 : -1));

export { sortFeedback };
