import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { FeedbackData } from '../../../types/FeedbackData';
import { LikeData } from '../../../types/LikeData';
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

export const addLike = createAsyncThunk<
  RoomData,
  LikeData,
  { rejectValue: string }
>(`${NAMESPACE}/addLike`, async (likeData, { rejectWithValue }) => {
  try {
    const { roomNumber, sequenceNumber, userId, path } = likeData;
    const { data } = await FirebaseAPI.addLike({
      roomNumber,
      sequenceNumber,
      userId,
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

export const removeLike = createAsyncThunk<
  RoomData,
  LikeData,
  { rejectValue: string }
>(`${NAMESPACE}/removeLike`, async (likeData, { rejectWithValue }) => {
  try {
    const { roomNumber, sequenceNumber, userId, path } = likeData;
    const { data } = await FirebaseAPI.removeLike({
      roomNumber,
      sequenceNumber,
      userId,
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
      .addCase(addLike.fulfilled, (state, { payload }) => {
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
        else state.errorMessage = 'Не удалось загрузить страницу';
      })
      .addCase(addFeedback.rejected, (state, { payload }) => {
        if (payload) state.errorMessage = payload;
        else state.errorMessage = 'Не удалось сохранить отзыв';
      })
      .addCase(addLike.rejected, (state, { payload }) => {
        if (payload) state.errorMessage = payload;
        else state.errorMessage = 'Не удалось добавить лайк';
      })
      .addCase(removeLike.rejected, (state, { payload }) => {
        if (payload) state.errorMessage = payload;
        else state.errorMessage = 'Не удалось удалить лайк';
      });
  },
});

const roomReducer = slice.reducer;

export { roomReducer };
