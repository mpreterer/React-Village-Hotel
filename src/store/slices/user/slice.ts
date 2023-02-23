/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { BookingData, BookingRequestData } from '../../../types/BookingData';

type InitialState = {
  booking: BookingData[];
  status: string;
  errorMessage: string | null;
};

const initialState: InitialState = {
  booking: [],
  status: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'user';

export const bookRoom = createAsyncThunk<
  BookingData,
  BookingRequestData,
  { rejectValue: string }
>(`${NAMESPACE}/bookRoom`, async (bookingRequestData, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.bookRoom(bookingRequestData);

    if (data === undefined) {
      throw new AxiosError('Booking failed');
    }
    const {
      roomNumber,
      discount,
      additionalService,
      totalAmount,
      dates,
      guests,
    } = bookingRequestData;

    return {
      roomNumber,
      discount,
      additionalService,
      totalAmount,
      dates,
      guests,
      bookingId: data.name,
    };
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
      .addCase(bookRoom.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.booking.push(payload);
        state.errorMessage = null;
      })
      .addCase(bookRoom.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(bookRoom.rejected, (state, { payload }) => {
        state.status = 'rejected';
        if (payload) state.errorMessage = payload;
        else state.errorMessage = 'An unexpected error occurred';
      });
  },
});

const userReducer = slice.reducer;

export { userReducer };
