import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  rooms: RoomData[];
  roomsAmount: number;
  activePageNumber: number;
  status: string;
  errorMessage: string | null;
};

const initialState: InitialState = {
  rooms: [],
  roomsAmount: 0,
  activePageNumber: 1,
  status: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'rooms';

export const fetchRooms = createAsyncThunk<
  RoomData[],
  void,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRooms`, (_, { rejectWithValue }) =>
  FirebaseAPI.fetchRooms(rejectWithValue)
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,

  reducers: {
    setActivePageNumber(state, { payload }: PayloadAction<number>) {
      state.activePageNumber = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.rooms = payload;
        state.roomsAmount = payload.length;
        state.errorMessage = null;
      })
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchRooms.rejected, (state, { payload }) => {
        state.status = 'rejected';
        if (typeof payload === 'string') state.errorMessage = payload;
        else state.errorMessage = 'An unexpected error occurred';
      });
  },
});

const { setActivePageNumber } = slice.actions;
const roomsReducer = slice.reducer;

export { roomsReducer, setActivePageNumber };
