/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  roomInfo: RoomData[];
  status: string;
  error: string | null;
};

const initialState: InitialState = {
  roomInfo: [],
  status: 'idle',
  error: null,
};

const NAMESPACE = 'roomInfo';

export const fetchRoomInfoById = createAsyncThunk(
  'rooms/fetchRoomInfoById',
  (id: number) => {
    const response = FirebaseAPI.fetchRoomById(id);
    return response;
  }
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomInfoById.fulfilled, (state, action) => {
        state.status = 'resolved';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        if (typeof action.payload !== 'string') state.roomInfo = action.payload;
      })
      .addCase(fetchRoomInfoById.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'error';
      })
      .addCase(fetchRoomInfoById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      });
  },
});

const roomInfoReducer = slice.reducer;

export { roomInfoReducer };
