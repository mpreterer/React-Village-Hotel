import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  rooms: RoomData[];
  roomsAmount: number;
  activePageNumber: number;
  status: string;
  error?: string;
};

const initialState: InitialState = {
  rooms: [],
  roomsAmount: 0,
  activePageNumber: 1,
  status: 'idle',
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
    setActivePageNumber(state, action: PayloadAction<number>) {
      state.activePageNumber = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.rooms = action.payload;
        state.roomsAmount = action.payload.length;
      })
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

const { setActivePageNumber } = slice.actions;
const roomsReducer = slice.reducer;

export { roomsReducer, setActivePageNumber };
