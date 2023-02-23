import { RootState } from '../../index';

const bookingSelect = (state: RootState) => state.user.booking;

export { bookingSelect };
