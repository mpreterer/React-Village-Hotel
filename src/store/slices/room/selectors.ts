import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;
const roomFeedback = (state: RootState) => state.room.room?.feedback;
const bookedDates = (state: RootState) => state.room.room?.bookedDates;

export { bookedDates, roomFeedback, roomSelect, statusSelect };
