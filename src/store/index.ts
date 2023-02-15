import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/slice';
import { roomReducer } from './slices/room/slice';
import { roomsReducer } from './slices/rooms/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    rooms: roomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
