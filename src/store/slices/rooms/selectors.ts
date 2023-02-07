import { RootState } from '../../index';

const roomCardsToDisplay = (state: RootState) => state.rooms.roomCardsToDisplay;
const roomCardsAmount = (state: RootState) => state.rooms.roomCardsAmount;

export { roomCardsAmount, roomCardsToDisplay };
