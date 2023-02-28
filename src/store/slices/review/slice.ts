import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import {
  MatcherActions,
  PendingAction,
  RejectedAction,
} from '../../../types/Action';
import { ReplyData, ReviewListData } from '../../../types/ReviewData';

type InitialState = {
  review: ReviewListData;
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  errorMessage: string | null;
};

const initialState: InitialState = {
  review: {},
  status: 'idle',
  errorMessage: null,
};

const NAMESPACE = 'review';

export const fetchReviewsByRoomId = createAsyncThunk<
  ReviewListData,
  number,
  { rejectValue: string }
>(`${NAMESPACE}/fetchReviewsByRoomId`, async (id, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.fetchReviewsByRoomId(id);
    if (!data) return rejectWithValue('Отзывов нет');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Произошла неизвестная ошибка, попробуйте позже');
  }
});

export const addReply = createAsyncThunk<
  ReviewListData,
  ReplyData,
  { rejectValue: string }
>(`${NAMESPACE}/addReply`, async (replyData, { rejectWithValue }) => {
  try {
    const { text, sequenceNumber, userId, date, userName, path } = replyData;
    const { status } = await FirebaseAPI.addReply({
      sequenceNumber,
      text,
      userId,
      date,
      userName,
      path,
    });

    if (status !== 200) {
      throw new AxiosError('Не удалось сохранить отзыв');
    }

    const { data } = await FirebaseAPI.fetchReviewsByRoomId(sequenceNumber);
    if (!data) return rejectWithValue('Отзывов нет');

    return data;
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
      .addCase(fetchReviewsByRoomId.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.review = payload;
        state.errorMessage = null;
      })
      .addCase(addReply.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.review = payload;
        state.errorMessage = null;
      })
      .addMatcher(
        (action: MatcherActions): action is PendingAction =>
          action.type.endsWith('pending'),
        (state, { type }) => {
          if (!type.match(/^review/)) return;
          state.status = 'loading';
          state.review = {};
          state.errorMessage = null;
        }
      )
      .addMatcher(
        (action: MatcherActions): action is RejectedAction =>
          action.type.endsWith('rejected'),
        (state, { payload, type }) => {
          if (!type.match(/^review/)) return;
          state.status = 'rejected';
          state.review = {};
          if (payload instanceof AxiosError) {
            /* eslint-disable-next-line 
            @typescript-eslint/no-unsafe-assignment, 
            @typescript-eslint/no-unsafe-member-access */
            state.errorMessage = payload.response?.data.error;
          }

          if (typeof payload === 'string') {
            state.errorMessage = payload;
          }
        }
      );
  },
});

const reviewReducer = slice.reducer;

export { reviewReducer };
