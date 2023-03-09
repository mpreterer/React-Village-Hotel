import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;
const roomFeedback = (state: RootState) => state.room.room?.feedback;
const bookedDates = (state: RootState) => state.room.room?.bookedDates;
const feedbackStatusSelect = (state: RootState) => state.room.feedbackStatus;
const feedbackErrorMessageSelect = (state: RootState) =>
  state.room.feedbackErrorMessage;

export {
  bookedDates,
  feedbackErrorMessageSelect,
  feedbackStatusSelect,
  roomFeedback,
  roomSelect,
  statusSelect,
};
