import { RootState } from '../../index';

const statusSelect = (state: RootState) => state.booking.status;

export { statusSelect };
