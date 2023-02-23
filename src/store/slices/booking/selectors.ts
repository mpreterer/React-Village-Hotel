import { RootState } from '../../index';

const bookingSelect = (state: RootState) => state.booking.booking;

export { bookingSelect };
