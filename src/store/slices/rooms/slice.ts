import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { RoomData } from '../../../types/RoomData';

type InitialState = {
  rooms: RoomData[];
  status: string;
  errorMessage: null | string;
};

const initialState: InitialState = {
  rooms: [],
  status: 'idle',
  errorMessage: null,
};

const loadRooms = createAsyncThunk<RoomData[], void, { rejectValue: string }>(
  'rooms/loadRooms',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get<RoomData[]>(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json'
      );
      return fulfillWithValue(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const slice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadRooms.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.rooms = payload;
        state.errorMessage = null;
      })
      .addCase(loadRooms.rejected, (state, action) => {
        state.status = 'error';
        if (action.payload) {
          state.errorMessage = action.payload;
        } else {
          state.errorMessage =
            action.error.message ?? 'An unexpected error occurred';
        }
      }),
});

export const roomsReducer = slice.reducer;
export { loadRooms };
