import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

const defaultRoom: RoomData = {
  furniture: [],
  availability: [],
  reservedDates: [],
  details: {},
  images: [],
  isLux: false,
  price: 0,
  rating: 0,
  reviewsCount: 0,
  roomNumber: 0,
};

type InitialState = {
  room: RoomData;
  status: string;
  errorMessage: string | undefined;
};

const initialState: InitialState = {
  room: defaultRoom,
  status: 'idle',
  errorMessage: undefined,
};

const NAMESPACE = 'room';

export const fetchRoomById = createAsyncThunk<
  RoomData,
  number,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRoomById`, (id, { rejectWithValue }) =>
  FirebaseAPI.fetchRoomById(rejectWithValue, id)
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.room = action.payload;
      })
      .addCase(fetchRoomById.rejected, (state, action) => {
        state.status = 'rejected';
        state.errorMessage = action.payload;
      })
      .addCase(fetchRoomById.pending, (state, action) => {
        state.status = 'loading';
        state.errorMessage = action.payload;
      });
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
