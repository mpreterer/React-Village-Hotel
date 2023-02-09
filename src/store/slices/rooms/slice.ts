/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  rooms: RoomData[];
  roomsAmount: number;
  activePageNumber: number;
  status: string;
  error: string | null;
};

const initialState: InitialState = {
  rooms: [],
  roomsAmount: 0,
  activePageNumber: 1,
  status: 'idle',
  error: null,
};

const NAMESPACE = 'roomCards';

export const fetchRoomCards = createAsyncThunk<
  RoomData[] | string,
  undefined,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRoomCards`, (_, { rejectWithValue }) =>
  FirebaseAPI.fetchRooms(rejectWithValue)
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,

  reducers: {
    setActivePageNumber(state, action: PayloadAction<number>) {
      state.activePageNumber = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomCards.fulfilled, (state, action) => {
        state.status = 'resolved';
        if (typeof action.payload !== 'string') state.rooms = action.payload;
        state.roomsAmount = action.payload.length;
      })
      .addCase(fetchRoomCards.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'error';
      })
      .addCase(fetchRoomCards.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      });
  },
});

const { setActivePageNumber } = slice.actions;
const roomsReducer = slice.reducer;

export { roomsReducer, setActivePageNumber };
