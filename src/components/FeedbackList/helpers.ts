import { ReviewItemData } from '../../types/ReviewData';

const sortFeedback = (feedbackList: [string, ReviewItemData][]) =>
  feedbackList.sort((a, b) => {
    if (a[1].date < b[1].date) return 1;
    return -1;
  });

export { sortFeedback };
