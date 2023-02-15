import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/slice';
import { roomsReducer } from './slices/rooms/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
