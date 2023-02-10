import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  rooms: RoomData[];
  roomsAmount: number;
  activePageNumber: number;
  status: string;
  error: string | null;
};

const initialState: InitialState = {
  rooms: [],
  roomsAmount: 0,
  activePageNumber: 1,
  status: 'idle',
  error: null,
};

const NAMESPACE = 'rooms';

export const fetchRooms = createAsyncThunk<
  RoomData[] | string,
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
        if (Array.isArray(action.payload)) {
          state.rooms = action.payload;
          state.roomsAmount = action.payload.length;
        }
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'rejected';
        const { payload } = action;
        if (typeof payload === 'string') state.error = payload;
      })
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      });
  },
});

const { setActivePageNumber } = slice.actions;
const roomsReducer = slice.reducer;

export { roomsReducer, setActivePageNumber };
