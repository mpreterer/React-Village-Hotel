import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { SignInData, SignUpData } from '../../../types/AuthData';

import {
  AuthError,
  calculateExpirationTime,
  ReauthenticateData,
  updateLocalStorage,
  UserData,
} from './helpers';

type InitialState = {
  isAuth: boolean;
  token: string | null;
  refreshToken: string | null;
  expirationTime: string | null;
  userId: string | null;
  userName: string | null;
  userSurname: string | null;
  error: AuthError | string | null;
  status: string;
};

const initialState: InitialState = {
  isAuth: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  expirationTime: localStorage.getItem('expirationTime') || null,
  userId: localStorage.getItem('userId') || null,
  userName: localStorage.getItem('userName') || null,
  userSurname: localStorage.getItem('userSurname') || null,
  error: null,
  status: 'idle',
};

const NAMESPACE = 'auth';

export const signUp = createAsyncThunk<
  UserData,
  SignUpData,
  { rejectValue: AxiosError<{ error: AuthError }> | string }
>(`${NAMESPACE}/signUp`, async (signUpData, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.signUp(signUpData);

    const fullName = data.displayName.split(' ');

    const expirationTime = calculateExpirationTime(
      Number(data.expiresIn)
    ).toISOString();

    const userData = {
      token: data.idToken,
      refreshToken: data.refreshToken,
      expirationTime,
      userId: data.localId,
      userName: fullName[0],
      userSurname: fullName[1],
    };

    return userData;
  } catch (error) {
    return rejectWithValue(
      axios.isAxiosError(error) ? error : 'An unexpected error occurred'
    );
  }
});

export const signIn = createAsyncThunk<
  UserData,
  Omit<SignInData, 'returnSecureToken'>,
  { rejectValue: AxiosError<{ error: AuthError }> | string }
>(`${NAMESPACE}/signIn`, async (signInData, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.signIn(signInData);

    const fullName = data.displayName.split(' ');

    const expirationTime = calculateExpirationTime(
      Number(data.expiresIn)
    ).toISOString();

    const userData = {
      token: data.idToken,
      refreshToken: data.refreshToken,
      expirationTime,
      userId: data.localId,
      userName: fullName[0],
      userSurname: fullName[1],
    };

    return userData;
  } catch (error) {
    return rejectWithValue(
      axios.isAxiosError(error) ? error : 'An unexpected error occurred'
    );
  }
});

export const reauthenticate = createAsyncThunk<
  ReauthenticateData,
  string,
  { rejectValue: AxiosError<{ error: AuthError }> | string }
>(`${NAMESPACE}/reauthenticate`, async (refreshToken, { rejectWithValue }) => {
  try {
    const { data } = await FirebaseAPI.reauthenticate(refreshToken);

    const expirationTime = calculateExpirationTime(
      Number(data.expires_in)
    ).toISOString();

    const newTokens = {
      token: data.id_token,
      refreshToken: data.refresh_token,
      expirationTime,
    };

    return newTokens;
  } catch (error) {
    return rejectWithValue(
      axios.isAxiosError(error) ? error : 'An unexpected error occurred'
    );
  }
});

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    signOut: (state) => {
      updateLocalStorage('remove');

      return {
        ...state,
        isAuth: false,
        token: null,
        refreshToken: null,
        expirationTime: null,
        userId: null,
        userName: null,
        userSurname: null,
        error: null,
        status: 'idle',
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
          isAuth: !!payload.token,
        };
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.status = 'rejected';

        if (payload instanceof AxiosError && payload.response) {
          state.error = payload.response?.data.error;
        }

        if (typeof payload === 'string') {
          state.error = payload;
        }
      })

      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
          isAuth: !!payload.token,
        };
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.status = 'rejected';

        if (payload instanceof AxiosError && payload.response) {
          state.error = payload.response?.data.error;
        }

        if (typeof payload === 'string') {
          state.error = payload;
        }
      })

      .addCase(reauthenticate.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(reauthenticate.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
        };
      })
      .addCase(reauthenticate.rejected, (state, { payload }) => {
        state.status = 'rejected';

        if (payload instanceof AxiosError && payload.response) {
          state.error = payload.response?.data.error;
        }

        if (typeof payload === 'string') {
          state.error = payload;
        }
      });
  },
});

export const { reducer: authReducer, actions: authActions } = slice;
