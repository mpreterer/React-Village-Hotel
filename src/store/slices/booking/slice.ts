import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { BookingData, BookingRequestData } from '../../../types/BookingData';

import { getDateFromString, sortDates } from './helpers';

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

const NAMESPACE = 'booking';

export const fetchBookingsByUserId = createAsyncThunk<
  BookingData[],
  string,
  { rejectValue: string }
>(`${NAMESPACE}/fetchBookingsByUserId`, async (userId, { rejectWithValue }) => {
  try {
    const result = await FirebaseAPI.fetchBookingsByUserId(userId);
    return Object.entries(result.data.booking).map((item) => {
      return { ...item[1], bookingId: item[0] };
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const bookRoom = createAsyncThunk<
  BookingData,
  BookingRequestData,
  { rejectValue: string }
>(`${NAMESPACE}/bookRoom`, async (bookingRequestData, { rejectWithValue }) => {
  const {
    roomNumber,
    discount,
    additionalService,
    totalAmount,
    dates,
    guests,
    sequenceNumber,
    userId,
  } = bookingRequestData;

  const makeBooking = async () => {
    try {
      const { status } = await FirebaseAPI.reserveDates({
        sequenceNumber,
        dates,
        userId,
      });

      if (status !== 200) {
        throw new AxiosError('Dates reservation failed');
      }
      const { data } = await FirebaseAPI.bookRoom(bookingRequestData);
      if (data === undefined) {
        throw new AxiosError('Booking failed');
      }

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
  };

  try {
    const result = await FirebaseAPI.fetchRoomById(roomNumber);
    const reservedDates = sortDates(
      Object.values(Object.values(result.data)[0].bookedDates ?? {})
        .map((item) => item.dates)
        .map(({ from, to }) => {
          return [getDateFromString(from), getDateFromString(to)];
        })
    );
    if (
      getDateFromString(dates.to) <= reservedDates[0][0] ||
      getDateFromString(dates.from) >=
        reservedDates[reservedDates.length - 1][1]
    ) {
      console.log('можно бронировать: бронирование до или после всех броней');
      return await makeBooking();
    }
    const availableRangeFrom = reservedDates.findIndex(
      (item) => item[1] <= getDateFromString(dates.from)
    );

    if (
      availableRangeFrom !== -1 &&
      getDateFromString(dates.to) <= reservedDates[availableRangeFrom + 1][0]
    ) {
      console.log('можно бронировать: бронирование в свободном диапазоне');
      return await makeBooking();
    }
    console.log('нельзя бронировать: диапазон занят');
    return rejectWithValue('Dates are not available for booking');
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
      .addCase(fetchBookingsByUserId.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.booking = payload;
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

const bookingReducer = slice.reducer;

export { bookingReducer };
