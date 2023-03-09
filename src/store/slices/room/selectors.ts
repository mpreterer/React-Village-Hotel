import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;
const roomFeedbackSelect = (state: RootState) => state.room.room?.feedback;
const bookedDatesSelect = (state: RootState) => state.room.room?.bookedDates;
const feedbackStatusSelect = (state: RootState) => state.room.feedbackStatus;
const feedbackErrorMessageSelect = (state: RootState) =>
  state.room.feedbackErrorMessage;

export {
  bookedDatesSelect,
  feedbackErrorMessageSelect,
  feedbackStatusSelect,
  roomFeedbackSelect,
  roomSelect,
  statusSelect,
};
