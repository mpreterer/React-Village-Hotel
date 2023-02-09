/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomInfoData } from '../../../types/RoomInfoData';

const defaultRoomInfo: RoomInfoData = {
  furniture: [{ id: '', limit: 10 }],
  availability: [{ id: '', limit: 10 }],
  reservedDates: [{ from: '', to: '' }],
  details: {
    withTV: false,
    withBabyBed: false,
    withBabyChair: false,
    withBreakfast: false,
    withDesk: false,
    withGuests: false,
    withShampoo: false,
    withWideHallway: false,
    withAssistance: false,
    withPets: false,
    canSmoke: false,
  },
  images: [''],
  isLux: false,
  price: 0,
  rating: 0,
  reviewsCount: 0,
  roomNumber: 0,
  comments: null,
  votes: null,
  information: {
    comfort: false,
    convenience: false,
    cosiness: false,
    lateCheckout: false,
    laundry: false,
  },
};

type InitialState = {
  roomInfo: RoomInfoData;
  status: string;
  error: string | null;
};

const initialState: InitialState = {
  roomInfo: defaultRoomInfo,
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
