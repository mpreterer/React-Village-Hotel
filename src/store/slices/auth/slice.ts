import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isAuth: boolean;
  userName: null | string;
};

const initialState: InitialState = {
  isAuth: false,
  userName: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = slice.reducer;
