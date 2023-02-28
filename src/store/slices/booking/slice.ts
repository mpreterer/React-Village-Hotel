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
    return Object.entries(data.booking).map(([bookingId, bookingData]) => ({
      ...bookingData,
      bookingId,
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Бронирование не подтверждено');
  }
});

export const makeBooking = createAsyncThunk<
  BookingData,
  BookingRequestData,
  { rejectValue: string }
>(
  `${NAMESPACE}/makeBooking`,
  async (bookingRequestData, { rejectWithValue }) => {
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

    const createRoomBooking = async () => {
      try {
        const { status } = await FirebaseAPI.reserveDates({
          sequenceNumber,
          dates,
          userId,
        });

        if (status !== 200) {
          throw new AxiosError('Dates reservation failed');
        }
        const { data } = await FirebaseAPI.makeBooking(bookingRequestData);
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

        return rejectWithValue('Бронирование не подтверждено');
      }
    };

    try {
      const roomData = await FirebaseAPI.fetchRoomById(roomNumber);
      const { bookedDates } = Object.values(roomData.data)[0];

      const reservedDates = sortDates(
        Object.values(bookedDates ?? {})
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
        return await createRoomBooking();
      }

      if (getDateFromString(dates.to) <= reservedDates[0][0]) {
        console.log('можно бронировать: раньше всех бронирований');
        return await createRoomBooking();
      }

      if (
        getDateFromString(dates.from) >=
        reservedDates[reservedDates.length - 1][1]
      ) {
        console.log('можно бронировать: позже всех бронирований');
        return await createRoomBooking();
      }

      if (
        previousDateRange !== -1 &&
        getDateFromString(dates.to) <= reservedDates[previousDateRange + 1][0]
      ) {
        console.log('можно бронировать: бронирование в свободном диапазоне');
        return await createRoomBooking();
      }

      console.log('нельзя бронировать: диапазон занят');
      return rejectWithValue(
        'На данный период проживания комната уже забронирована'
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue('Бронирование не подтверждено');
    }
  }
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeBooking.fulfilled, (state, { payload }) => {
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
            if (payload.response?.status === 400) {
              /* eslint-disable-next-line 
              @typescript-eslint/no-unsafe-assignment, 
              @typescript-eslint/no-unsafe-member-access */
              state.errorMessage = payload.response?.data.error;
            } else {
              state.errorMessage = payload.message;
            }
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
