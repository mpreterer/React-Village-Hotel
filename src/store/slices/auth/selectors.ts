import { RootState } from '../../index';

const authSelect = (state: RootState) => state.auth;
const isAuthSelect = (state: RootState) => state.auth.isAuth;
const tokenSelect = (state: RootState) => state.auth.token;
const refreshTokenSelect = (state: RootState) => state.auth.refreshToken;
const expirationTimeSelect = (state: RootState) => state.auth.expirationTime;
const userIdSelect = (state: RootState) => state.auth.userId;
const userNameSelect = (state: RootState) => state.auth.userName;
const userSurnameSelect = (state: RootState) => state.auth.userSurname;
const errorSelect = (state: RootState) => state.auth.error;
const statusSelect = (state: RootState) => state.auth.status;

export {
  authSelect,
  errorSelect,
  expirationTimeSelect,
  isAuthSelect,
  refreshTokenSelect,
  statusSelect,
  tokenSelect,
  userIdSelect,
  userNameSelect,
  userSurnameSelect,
};
