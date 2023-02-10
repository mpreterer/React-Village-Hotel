import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/slice';
import { roomInfoReducer } from './slices/room/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    roomInfo: roomInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
