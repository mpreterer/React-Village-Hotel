import type { RootState } from '../../index';

const authSelect = (state: RootState) => state.auth;
const isAuthSelect = (state: RootState) => state.auth.isAuth;
const tokenSelect = (state: RootState) => state.auth.token;
const refreshTokenSelect = (state: RootState) => state.auth.refreshToken;
const expirationTimeSelect = (state: RootState) => state.auth.expirationTime;
const userIdSelect = (state: RootState) => state.auth.userId;
const userNameSelect = (state: RootState) => state.auth.userName;
const userSurnameSelect = (state: RootState) => state.auth.userSurname;
const authErrorSelect = (state: RootState) => state.auth.error;
const authStatusSelect = (state: RootState) => state.auth.status;
const profilePictureUrlSelect = (state: RootState) => state.auth.profilePicture;
const changeProfilePictureStatusSelect = (state: RootState) =>
  state.auth.changeProfilePictureStatus;
const changeProfilePictureErrorMessageSelect = (state: RootState) =>
  state.auth.changeProfilePictureErrorMessage;
const changePasswordStatusSelect = (state: RootState) =>
  state.auth.changePasswordStatus;
const changePasswordErrorMessageSelect = (state: RootState) =>
  state.auth.changePasswordErrorMessage;
const deleteAccountStatusSelect = (state: RootState) =>
  state.auth.deleteAccountStatus;
const deleteAccountErrorMessageSelect = (state: RootState) =>
  state.auth.deleteAccountErrorMessage;
const changeUserNameStatusSelect = (state: RootState) =>
  state.auth.changeUserNameStatus;
const changeUserNameErrorMessageSelect = (state: RootState) =>
  state.auth.changeUserNameErrorMessage;

export {
  authErrorSelect,
  authSelect,
  authStatusSelect,
  changePasswordErrorMessageSelect,
  changePasswordStatusSelect,
  changeProfilePictureErrorMessageSelect,
  changeProfilePictureStatusSelect,
  changeUserNameErrorMessageSelect,
  changeUserNameStatusSelect,
  deleteAccountErrorMessageSelect,
  deleteAccountStatusSelect,
  expirationTimeSelect,
  isAuthSelect,
  profilePictureUrlSelect,
  refreshTokenSelect,
  tokenSelect,
  userIdSelect,
  userNameSelect,
  userSurnameSelect,
};
