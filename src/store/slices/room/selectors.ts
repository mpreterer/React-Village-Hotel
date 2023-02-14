import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;

export { roomSelect, statusSelect };
