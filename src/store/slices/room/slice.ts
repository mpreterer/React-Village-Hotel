/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';

const NAMESPACE = 'room';

export const fetchRoomById = createAsyncThunk(
  `rooms/${NAMESPACE}`,
  async (id: number) => {
    const response = await FirebaseAPI.fetchRoomById(id);
    return response;
  }
);

interface InitialState {
  detailedAboutRooms: [];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: InitialState = {
  detailedAboutRooms: [],
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoomById.rejected, (state) => {
      state.error = 'error';
    });
  },
});

const detailedRoomReducer = slice.reducer;

export { detailedRoomReducer };
