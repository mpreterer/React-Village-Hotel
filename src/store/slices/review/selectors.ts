import { RootState } from '../../index';

const reviewsSelect = (state: RootState) => state.review.review;

export { reviewsSelect };
