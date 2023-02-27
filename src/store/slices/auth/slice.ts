import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { SignInData, SignUpData } from '../../../types/AuthData';
import type { RootState } from '../../index';

import {
  AuthError,
  calculateExpirationTime,
  FulfilledAction,
  PendingAction,
  ReauthenticateData,
  RejectedAction,
  updateLocalStorage,
  UserData,
} from './helpers';

export type MatcherActions = PendingAction | FulfilledAction | RejectedAction;

type InitialState = {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  refreshToken: string | null;
  expirationTime: string | null;
  userId: string | null;
  userName: string | null;
  userSurname: string | null;
  error: AuthError | string | null;
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
};

const initialState: InitialState = {
  isAuth: !!localStorage.getItem('token'),
  email: localStorage.getItem('email') || null,
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
      email: data.email,
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
      email: data.email,
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

export const changePassword = createAsyncThunk<
  { token: string; refreshToken: string; expirationTime: string },
  { password: string; newPassword: string },
  { state: RootState; rejectValue: AxiosError<{ error: AuthError }> | string }
>(
  `${NAMESPACE}/changePassword`,
  async ({ password, newPassword }, { rejectWithValue, getState }) => {
    const {
      auth: { email },
    } = getState();
    try {
      if (email) {
        const { data } = await FirebaseAPI.changePassword({
          password,
          email,
          newPassword,
        });
        const expirationTime = calculateExpirationTime(
          Number(data.expiresIn)
        ).toISOString();

        return {
          token: data.idToken,
          refreshToken: data.refreshToken,
          expirationTime,
        };
      }
      return rejectWithValue('you are not authorized');
    } catch (error) {
      return rejectWithValue(
        axios.isAxiosError(error) ? error : 'An unexpected error occurred'
      );
    }
  }
);

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    signOut: (state) => {
      updateLocalStorage('remove');

      return {
        ...state,
        email: null,
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
      .addCase(signUp.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
          isAuth: !!payload.token,
        };
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

      .addCase(reauthenticate.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
        };
      })

      .addCase(changePassword.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
        };
      })

      .addMatcher(
        (action: MatcherActions): action is PendingAction =>
          action.type.endsWith('pending'),
        (state) => {
          state.status = 'loading';
          state.error = null;
        }
      )

      .addMatcher(
        (action: MatcherActions): action is RejectedAction =>
          action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.status = 'rejected';

          if (payload instanceof AxiosError) {
            /* eslint-disable-next-line 
            @typescript-eslint/no-unsafe-assignment, 
            @typescript-eslint/no-unsafe-member-access */
            state.error = payload.response?.data.error;
          }

          if (typeof payload === 'string') {
            state.error = payload;
          }
        }
      );
  },
});

export const { reducer: authReducer, actions: authActions } = slice;
