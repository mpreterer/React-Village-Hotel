import { RootState } from '../../index';

const statusSelect = (state: RootState) => state.booking.status;
const errorMessageSelect = (state: RootState) => state.booking.errorMessage;

export { errorMessageSelect, statusSelect };
