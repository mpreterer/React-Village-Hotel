import { RootState } from '../../index';

const rooms = (state: RootState) => state.rooms.rooms;
const roomsAmount = (state: RootState) => state.rooms.roomsAmount;
const activePageNumber = (state: RootState) => state.rooms.activePageNumber;

export { activePageNumber, rooms, roomsAmount };
