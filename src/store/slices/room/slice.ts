import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { BookingData, BookingResponseData } from '../../../types/BookingData';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  room: RoomData | null;
  status: string;
  errorMessage: string | null;
};

const initialState: InitialState = {
  room: null,
  status: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'room';

export const fetchRoomById = createAsyncThunk<
  RoomData,
  number,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRoomById`, async (id, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.fetchRoomById(id);

    const roomData = Object.values(data)[0];

    if (roomData === undefined) {
      throw new AxiosError('Room not found');
    }

    return roomData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('An unexpected error occurred');
  }
});

export const bookingRoom = createAsyncThunk<
  BookingResponseData,
  BookingData,
  { rejectValue: string }
>(`${NAMESPACE}/bookingRoom`, async (bookingData, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.bookingRoom(bookingData);
    if (data === undefined) {
      throw new AxiosError('Booking failed');
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('An unexpected error occurred');
  }
});

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomById.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.room = payload;
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.rejected, (state, { payload }) => {
        state.status = 'rejected';
        if (payload) state.errorMessage = payload;
      });
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
