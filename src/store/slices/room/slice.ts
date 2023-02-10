import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

const defaultRoomInfo: RoomData = {
  furniture: [{ id: '', limit: 0 }],
  availability: [{ id: '', limit: 0 }],
  reservedDates: [{ from: '', to: '' }],
  details: {},
  images: [''],
  isLux: false,
  price: 0,
  rating: 0,
  reviewsCount: 0,
  roomNumber: 0,
};

type InitialState = {
  roomInfo: RoomData;
  status: string;
  error: string | null;
};

const initialState: InitialState = {
  roomInfo: defaultRoomInfo,
  status: 'idle',
  error: null,
};

const NAMESPACE = 'roomInfo';

export const fetchRoomInfoById = createAsyncThunk<
  RoomData,
  number,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRoomInfoById`, (id, { rejectWithValue }) => {
  return FirebaseAPI.fetchRoomById(rejectWithValue, id);
});

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomInfoById.fulfilled, (state, action) => {
        state.status = 'resolved';
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
