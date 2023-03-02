import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type RoomBookingProps = {
  totalAmount?: number;
  bookingStatus?: boolean;
  bookingId?: string;
};

type BookingRoom = RoomData & RoomBookingProps;

type InitialState = {
  bookedRooms: BookingRoom[] | null;
  status: string;
  cancelBookingStatus: string;
  errorMessage: string | null;
};

const initialState: InitialState = {
  bookedRooms: null,
  status: 'idle',
  cancelBookingStatus: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'bookings';

export const fetchBookedRooms = createAsyncThunk<
  BookingRoom[],
  string,
  { rejectValue: string }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>(`${NAMESPACE}/fetchBookedRooms`, async (userId, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.fetchBookingsByUserId(userId);

    if (!data) return rejectWithValue('No bookings for this user');

    const bookingRooms = Object.entries(data.booking).map(
      ([bookingId, bookingData]) => ({
        ...bookingData,
        bookingId,
      })
    );

    const listRoomIds = bookingRooms.map((room) => room.roomNumber);

    const promises = listRoomIds.map((number) =>
      FirebaseAPI.fetchRoomById(number)
    );

    const roomsData = await Promise.all(promises).then((responses) => {
      return responses.map((response) => Object.values(response.data)[0]);
    });

    if (!roomsData) return rejectWithValue('Bookings not found');

    const mergeRooms = bookingRooms.map((bookedRoom) => {
      const detailedRoom = roomsData.find(
        (room) => room.roomNumber === bookedRoom.roomNumber
      );

      return {
        ...bookedRoom,
        ...detailedRoom,
      };
    });

    return mergeRooms;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('An unexpected error occurred');
  }
});

export const removeBooking = createAsyncThunk<
  void,
  { userId: string; roomId: string },
  { rejectValue: string }
>(
  `${NAMESPACE}/removeBooking`,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (removeResponseData, { rejectWithValue }) => {
    try {
      const { userId, roomId } = removeResponseData;
      await FirebaseAPI.removeBooking(userId, roomId);
      return;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // eslint-disable-next-line consistent-return
        return rejectWithValue(error.message);
      }

      // eslint-disable-next-line consistent-return
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookedRooms.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.bookedRooms = payload;
        state.errorMessage = null;
      })
      .addCase(fetchBookedRooms.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchBookedRooms.rejected, (state, { payload }) => {
        state.status = 'rejected';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (payload) state.errorMessage = payload;
      })
      .addCase(removeBooking.fulfilled, (state) => {
        state.cancelBookingStatus = 'resolved';
        state.errorMessage = null;
      })
      .addCase(removeBooking.pending, (state) => {
        state.cancelBookingStatus = 'loading';
        state.errorMessage = null;
      })
      .addCase(removeBooking.rejected, (state, { payload }) => {
        state.cancelBookingStatus = 'rejected';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (payload) state.errorMessage = payload;
      });
  },
});

const profileReducer = slice.reducer;

export { profileReducer };
