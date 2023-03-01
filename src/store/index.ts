import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth/slice';
import { bookingReducer } from './slices/booking/slice';
import { filtersReducer } from './slices/filters/slice';
import { roomReducer } from './slices/room/slice';
import { roomsReducer } from './slices/rooms/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    rooms: roomsReducer,
    room: roomReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
