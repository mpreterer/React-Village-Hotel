import { ReviewItemData } from '../../types/ReviewData';

const sortFeedback = (feedbackList: [string, ReviewItemData][]) =>
  feedbackList.sort((a, b) => (a[1].date < b[1].date ? 1 : -1));

export { sortFeedback };
