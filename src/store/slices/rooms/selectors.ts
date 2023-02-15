import { RootState } from '../../index';

const roomsSelect = (state: RootState) => state.rooms.rooms;
const roomsAmountSelect = (state: RootState) => state.rooms.roomsAmount;
const activePageNumberSelect = (state: RootState) =>
  state.rooms.activePageNumber;
const statusSelect = (state: RootState) => state.rooms.status;

export { activePageNumberSelect, roomsAmountSelect, roomsSelect, statusSelect };
