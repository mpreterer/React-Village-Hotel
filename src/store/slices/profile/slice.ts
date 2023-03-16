import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { BookingErrorMessages } from '../../../shared/constants/BookingErrorMessages';
import { DropdownGuestsItemData } from '../../../types/DropdownItemData';
import { RoomData } from '../../../types/RoomData';

type PropsBookingRoom = {
  additionalService: number;
  bookingStatus: boolean;
  dates: { from: string; to: string };
  discount: number;
  totalAmount: number;
  bookingId: string;
  guests: DropdownGuestsItemData[];
};

export type BookingRoom = RoomData & PropsBookingRoom;

type InitialState = {
  bookedRooms: BookingRoom[] | [];
  status: 'idle' | 'resolved' | 'loading' | 'rejected';
  cancelBookingStatus: 'idle' | 'resolved' | 'loading' | 'rejected';
  errorMessage: string | null;
};

const initialState: InitialState = {
  bookedRooms: [],
  status: 'idle',
  cancelBookingStatus: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'profile';

export const fetchBookedRooms = createAsyncThunk<
  BookingRoom[],
  string,
  { rejectValue: string }
>(`${NAMESPACE}/fetchBookedRooms`, async (userId, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.fetchBookingsByUserId(userId);

    if (data === null) {
      return rejectWithValue(BookingErrorMessages.BOOKINGS_NOT_FOUND);
    }

    const bookingRooms = Object.entries(data.booking).map(
      ([bookingId, bookingData]) => ({
        ...bookingData,
        bookingId,
      })
    );

    const listRoomIds = bookingRooms
      .filter(
        (room, index, self) =>
          self.findIndex((info) => info.roomNumber === room.roomNumber) ===
          index
      )
      .map((room) => room.roomNumber);

    const promises = listRoomIds.map((number) =>
      FirebaseAPI.fetchRoomById(number)
    );

    const roomsData = await Promise.all(promises).then((responses) => {
      return responses.map((response) => Object.values(response.data)[0]);
    });

    const mergeRooms = bookingRooms.map((bookedRoom) => {
      const detailedRoom = roomsData.find(
        (room) => room.roomNumber === bookedRoom.roomNumber
      ) as RoomData;

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

export const removeUserBooking = createAsyncThunk<
  string,
  { userId: string; roomId: string; roomNumber: number },
  { rejectValue: string }
>(
  `${NAMESPACE}/removeUserBooking`,
  async (removeResponseData, { rejectWithValue }) => {
    try {
      const { userId, roomId, roomNumber } = removeResponseData;

      const { data } = await FirebaseAPI.fetchBookingsByUserId(userId);

      if (data === null) {
        return rejectWithValue(BookingErrorMessages.NO_BOOKING_FOR_THIS_USER);
      }

      const bookingRooms = Object.entries(data.booking).map(
        ([bookingId, bookingData]) => ({
          ...bookingData,
          bookingId,
        })
      );

      const reservedDatesToRemove = bookingRooms.filter(
        (room) => room.bookingId === roomId
      )[0].dates;

      const roomByIdData = await FirebaseAPI.fetchRoomById(roomNumber);

      const [roomIdKey] = Object.keys(roomByIdData.data);

      const reservedDates = Object.values(
        Object.values(roomByIdData.data)[0].bookedDates ?? {}
      ).map((item) => item.dates);

      const indexRoomToRemove = reservedDates.findIndex(
        (item) =>
          item.from === reservedDatesToRemove.from &&
          item.to === reservedDatesToRemove.to
      );

      const reservedDateKey = Object.keys(
        Object.values(roomByIdData.data)[0].bookedDates ?? {}
      )[indexRoomToRemove];

      await FirebaseAPI.removeRoomBooking(roomIdKey, reservedDateKey);
      await FirebaseAPI.removeUserBooking(userId, roomId);

      return roomId;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }

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
        if (typeof payload === 'string') state.errorMessage = payload;
      })
      .addCase(removeUserBooking.fulfilled, (state, { payload }) => {
        state.bookedRooms = state.bookedRooms?.filter(
          (room) => room.bookingId !== payload
        );
        state.cancelBookingStatus = 'resolved';
        state.errorMessage = null;
      })
      .addCase(removeUserBooking.pending, (state) => {
        state.cancelBookingStatus = 'loading';
        state.errorMessage = null;
      })
      .addCase(removeUserBooking.rejected, (state, { payload }) => {
        state.cancelBookingStatus = 'rejected';
        if (typeof payload === 'string') state.errorMessage = payload;
      });
  },
});

const profileReducer = slice.reducer;

export { profileReducer };
