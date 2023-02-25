import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import {
  MatcherActions,
  PendingAction,
  RejectedAction,
} from '../../../types/Action';
import { BookingData, BookingRequestData } from '../../../types/BookingData';

import { getDateFromString, sortDates } from './helpers';

type InitialState = {
  booking: BookingData[];
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
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
    const { data } = await FirebaseAPI.fetchBookingsByUserId(userId);
    if (!data) return rejectWithValue('No bookings for this user');
    return Object.entries(data.booking).map((item) => {
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

    const previousDateRange = reservedDates.findIndex(
      (item) => item[1] <= getDateFromString(dates.from)
    );

    if (!reservedDates.length) {
      console.log('можно бронировать: первое бронирование');
      return await makeBooking();
    }

    if (getDateFromString(dates.to) <= reservedDates[0][0]) {
      console.log('можно бронировать: раньше всех бронирований');
      return await makeBooking();
    }

    if (
      getDateFromString(dates.from) >=
      reservedDates[reservedDates.length - 1][1]
    ) {
      console.log('можно бронировать: позже всех бронирований');
      return await makeBooking();
    }

    if (
      previousDateRange !== -1 &&
      getDateFromString(dates.to) <= reservedDates[previousDateRange + 1][0]
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
      .addMatcher(
        (action: MatcherActions): action is PendingAction =>
          action.type.endsWith('pending'),
        (state, { type }) => {
          if (!type.match(/^booking/)) return;
          state.status = 'loading';
          state.errorMessage = null;
        }
      )
      .addMatcher(
        (action: MatcherActions): action is RejectedAction =>
          action.type.endsWith('rejected'),
        (state, { payload, type }) => {
          if (!type.match(/^booking/)) return;
          state.status = 'rejected';
          if (payload instanceof AxiosError) {
            /* eslint-disable-next-line 
            @typescript-eslint/no-unsafe-assignment, 
            @typescript-eslint/no-unsafe-member-access */
            state.errorMessage = payload.response?.data.error;
          }

          if (typeof payload === 'string') {
            state.errorMessage = payload;
          }
        }
      );
  },
});

const bookingReducer = slice.reducer;

export { bookingReducer };
