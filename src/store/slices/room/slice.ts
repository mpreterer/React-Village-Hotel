import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { FeedbackData } from '../../../types/FeedbackData';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  room: RoomData | null;
  status: 'idle' | 'resolved' | 'loading' | 'rejected';
  errorMessage: string | null;
  feedbackStatus: 'idle' | 'resolved' | 'loading' | 'rejected';
  feedbackErrorMessage: string | null;
};

const initialState: InitialState = {
  room: null,
  status: 'idle',
  errorMessage: null,
  feedbackStatus: 'idle',
  feedbackErrorMessage: null,
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
        state.feedbackStatus = 'resolved';
        state.room = payload;
        state.errorMessage = null;
      })
      .addCase(fetchRoomById.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(addFeedback.pending, (state) => {
        state.feedbackStatus = 'loading';
        state.feedbackErrorMessage = null;
      })
      .addCase(fetchRoomById.rejected, (state, { payload }) => {
        state.status = 'rejected';
        if (payload) state.errorMessage = payload;
        else state.errorMessage = 'Не удалось загрузить страницу';
      })
      .addCase(addFeedback.rejected, (state, { payload }) => {
        state.feedbackStatus = 'rejected';
        if (payload) state.feedbackErrorMessage = payload;
        else state.feedbackErrorMessage = 'Не удалось сохранить отзыв';
      });
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
