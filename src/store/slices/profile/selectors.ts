import { RootState } from '../../index';

const profileSelect = (state: RootState) => state.profile.bookedRooms;
const statusSelect = (state: RootState) => state.profile.status;
const errorMessageSelect = (state: RootState) => state.profile.errorMessage;
const cancelBookingStatusSelect = (state: RootState) =>
  state.profile.cancelBookingStatus;
const rateErrorMessageSelect = (state: RootState) =>
  state.profile.rateErrorMessage;
const rateStatusSelect = (state: RootState) => state.profile.rateStatus;

export {
  cancelBookingStatusSelect,
  errorMessageSelect,
  profileSelect,
  rateErrorMessageSelect,
  rateStatusSelect,
  statusSelect,
};
