/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomCardData } from '../../../types/RoomCardData';

type InitialState = {
  roomCardsAll: Array<RoomCardData>;
  roomCardsToDisplay: Array<RoomCardData>;
  roomCardsAmount: number;
  pageNumber: number;
  status: string | null;
  error: string | null;
};

const initialState: InitialState = {
  roomCardsAll: [],
  roomCardsToDisplay: [],
  roomCardsAmount: 0,
  pageNumber: 0,
  status: null,
  error: null,
};

const NAMESPACE = 'roomCards';

export const fetchRoomCards = createAsyncThunk<
  Array<RoomCardData> | string,
  undefined
>(`${NAMESPACE}/fetchRoomCards`, (_) => FirebaseAPI.fetchRooms());

const slice = createSlice({
  name: NAMESPACE,
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomCards.fulfilled, (state, action) => {
        state.status = 'resolved';
        if (typeof action.payload !== 'string')
          state.roomCardsAll = action.payload;
        state.roomCardsAmount = action.payload.length;
      })
      .addCase(fetchRoomCards.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'error';
      })
      .addCase(fetchRoomCards.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      });
  },

  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      const itemsPerPage = 12;
      const currentPage = action.payload;

      const indexFrom = currentPage ? (currentPage - 1) * itemsPerPage : 0;
      const indexTo = currentPage ? currentPage * itemsPerPage : itemsPerPage;

      state.pageNumber = currentPage;
      state.roomCardsToDisplay = state.roomCardsAll.slice(indexFrom, indexTo);
    },
  },
});

const { setPageNumber } = slice.actions;
const roomsReducer = slice.reducer;

export { roomsReducer, setPageNumber };
