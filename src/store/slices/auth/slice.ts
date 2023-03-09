import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { FirebaseAPI } from '../../../FirebaseAPI';
import { SignInData, SignUpData } from '../../../types/AuthData';
import { RoomData } from '../../../types/RoomData';
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
  profilePicture: string | null;
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  currentProcess: 'idle' | 'delete' | 'change' | 'edit';
};

const initialState: InitialState = {
  isAuth: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  expirationTime: localStorage.getItem('expirationTime') || null,
  userId: localStorage.getItem('userId') || null,
  userName: localStorage.getItem('userName') || null,
  userSurname: localStorage.getItem('userSurname') || null,
  profilePicture: localStorage.getItem('profilePicture') || null,
  error: null,
  status: 'idle',
  currentProcess: 'idle',
};

const NAMESPACE = 'auth';

export const signUp = createAsyncThunk<
  Omit<UserData, 'profilePicture'>,
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
      axios.isAxiosError(error)
        ? error
        : 'Произошла неизвестная ошибка, попробуйте позже'
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
      profilePicture: data.photoUrl,
      userName: fullName[0],
      userSurname: fullName[1],
    };

    return userData;
  } catch (error) {
    return rejectWithValue(
      axios.isAxiosError(error)
        ? error
        : 'Произошла неизвестная ошибка, попробуйте позже'
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
      axios.isAxiosError(error)
        ? error
        : 'Произошла неизвестная ошибка, попробуйте позже'
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

export const deleteAccount = createAsyncThunk<
  undefined,
  Omit<SignInData, 'returnSecureToken'>,
  { rejectValue: AxiosError<{ error: AuthError }> | string }
>(`${NAMESPACE}/deleteAccount`, async (data, { rejectWithValue }) => {
  try {
    await FirebaseAPI.deleteAccount(data);
    return undefined;
  } catch (error) {
    return rejectWithValue(
      axios.isAxiosError(error)
        ? error
        : 'Произошла неизвестная ошибка, попробуйте позже'
    );
  }
});

export const updateProfilePicture = createAsyncThunk<
  string,
  File,
  { state: RootState; rejectValue: string }
>(
  `${NAMESPACE}/updateProfilePicture`,
  async (file, { rejectWithValue, getState }) => {
    const {
      auth: { token, userId },
    } = getState();
    try {
      if (userId && token) {
        const url = await FirebaseAPI.updateProfilePicture(file, userId, token);
        return url;
      }
      return rejectWithValue('произошла неизвестная ошибка');
    } catch (error) {
      return rejectWithValue('произошла неизвестная ошибка');
    }
  }
);

export const updateUserName = createAsyncThunk<
  UserData | undefined,
  { rooms: RoomData[]; name?: string; surname?: string },
  { state: RootState; rejectValue: AxiosError<{ error: AuthError }> | string }
>(
  `${NAMESPACE}/updateProfilePicture`,
  async ({ name, surname, rooms }, { rejectWithValue, getState }) => {
    const {
      auth: { userName, userSurname, token, userId },
    } = getState();

    try {
      if (userId && token && userName && userSurname) {
        const data = await FirebaseAPI.updateUserName({
          name: name || userName,
          surname: surname || userSurname,
          rooms,
          userId,
          token,
        });

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
          profilePicture: data.photoUrl,
          userName: fullName[0],
          userSurname: fullName[1],
        };

        return userData;
      }
      return undefined;
    } catch (error) {
      return rejectWithValue(
        axios.isAxiosError(error)
          ? error
          : 'Произошла неизвестная ошибка, попробуйте позже'
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
        profilePicture: null,
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

    resetErrors: (state) => {
      return {
        ...state,
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

      .addCase(deleteAccount.fulfilled, (state) => {
        slice.caseReducers.signOut(state);
        state.status = 'resolved';
      })

      .addCase(updateProfilePicture.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', { profilePicture: payload });
        state.profilePicture = payload;
        state.status = 'resolved';
      })

      .addCase(updateUserName.fulfilled, (state, { payload }) => {
        updateLocalStorage('set', payload);

        return {
          ...state,
          ...payload,
          status: 'resolved',
        };
      })

      .addMatcher(
        (action: MatcherActions): action is PendingAction =>
          action.type.startsWith(NAMESPACE) && action.type.endsWith('pending'),
        (state, action) => {
          if (action.type.includes('updateProfilePicture')) {
            state.currentProcess = 'edit';
          }
          state.status = 'loading';
          state.error = null;
        }
      )

      .addMatcher(
        (action: MatcherActions): action is RejectedAction =>
          action.type.startsWith(NAMESPACE) && action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.status = 'rejected';

          if (payload instanceof AxiosError) {
            if (payload.response?.status === 400) {
              /* eslint-disable-next-line 
              @typescript-eslint/no-unsafe-assignment, 
              @typescript-eslint/no-unsafe-member-access */
              state.error = payload.response?.data.error;
            } else {
              state.error = payload.message;
            }
          }

          if (typeof payload === 'string') {
            state.error = payload;
          }
        }
      );
  },
});

export const { reducer: authReducer, actions: authActions } = slice;
