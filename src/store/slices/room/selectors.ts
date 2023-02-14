import { RootState } from '../../index';

const room = (state: RootState) => state.room.room;
const statusRequest = (state: RootState) => state.room.status;

export { room, statusRequest };
