import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { MatcherActions, RejectedAction } from '../../../types/Action';
import { FeedbackData } from '../../../types/FeedbackData';
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

export const addFeedback = createAsyncThunk<
  RoomData,
  FeedbackData,
  { rejectValue: string }
>(`${NAMESPACE}/addFeedback`, async (feedbackData, { rejectWithValue }) => {
  try {
    const { roomNumber, text, sequenceNumber, userId, date, userName, path } =
      feedbackData;
    const { data } = await FirebaseAPI.addFeedback({
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
      .addCase(addFeedback.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.room = payload;
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(addFeedback.pending, (state) => {
        state.status = 'loadingFeedback';
        state.errorMessage = null;
      })
      .addMatcher(
        (action: MatcherActions): action is RejectedAction =>
          action.type.startsWith(NAMESPACE) && action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.status = 'rejected';
          if (payload instanceof AxiosError) {
            state.errorMessage = payload.message;
          }
          if (typeof payload === 'string') {
            state.errorMessage = payload;
          }
        }
      );
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
