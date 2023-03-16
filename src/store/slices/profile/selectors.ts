import { RootState } from '../../index';

const profileSelect = (state: RootState) => state.profile.bookedRooms;
const statusSelect = (state: RootState) => state.profile.status;
const errorMessageSelect = (state: RootState) => state.profile.errorMessage;
const cancelBookingStatusSelect = (state: RootState) =>
  state.profile.cancelBookingStatus;

export {
  cancelBookingStatusSelect,
  errorMessageSelect,
  profileSelect,
  statusSelect,
};
