import { RootState } from '../../index';

const bookingSelect = (state: RootState) => state.booking.booking;
const statusSelect = (state: RootState) => state.booking.status;
const errorMessageSelect = (state: RootState) => state.booking.errorMessage;

export { bookingSelect, errorMessageSelect, statusSelect };
