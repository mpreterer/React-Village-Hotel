import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { ReplyData } from '../../../types/ReviewData';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  room: RoomData | null;
  status: string;
  errorMessage: string | null;
};

const initialState: InitialState = {
  room: null,
  status: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'room';

export const fetchRoomById = createAsyncThunk<
  RoomData,
  number,
  { rejectValue: string }
>(`${NAMESPACE}/fetchRoomById`, async (id, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.fetchRoomById(id);

    const roomData = Object.values(data)[0];

    return roomData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('Произошла неизвестная ошибка, попробуйте позже');
  }
});

export const addReply = createAsyncThunk<
  RoomData,
  ReplyData,
  { rejectValue: string }
>(`${NAMESPACE}/addReply`, async (replyData, { rejectWithValue }) => {
  try {
    const { roomNumber, text, sequenceNumber, userId, date, userName, path } =
      replyData;
    const { data } = await FirebaseAPI.addReply({
      roomNumber,
      sequenceNumber,
      text,
      userId,
      date,
      userName,
      path,
    });

    return Object.values(data)[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Произошла неизвестная ошибка, попробуйте позже');
  }
});

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomById.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.room = payload;
        state.errorMessage = null;
      })
      .addCase(addReply.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.room = payload;
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.rejected, (state, { payload }) => {
        state.status = 'rejected';
        if (payload) state.errorMessage = payload;
      });
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
