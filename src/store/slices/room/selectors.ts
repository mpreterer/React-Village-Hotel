import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;
const review = (state: RootState) => state.room.room?.reviews;

export { review, roomSelect, statusSelect };
