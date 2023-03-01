import { RootState } from '../../index';

const statusSelect = (state: RootState) => state.booking.status;
const errorMessageSelect = (state: RootState) => state.booking.errorMessage;
const bookingSelect = (state: RootState) => state.booking.booking;

export { bookingSelect, errorMessageSelect, statusSelect };
