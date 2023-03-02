import { RootState } from '../../index';

const roomSelect = (state: RootState) => state.room.room;
const statusSelect = (state: RootState) => state.room.status;
const review = (state: RootState) => state.room.room?.reviews;
const bookedDates = (state: RootState) => state.room.room?.bookedDates;

export { bookedDates, review, roomSelect, statusSelect };
