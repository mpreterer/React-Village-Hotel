import { ErrorMessage } from '../../../shared/constants/authError';

export type AuthError = {
  code: 400;
  errors: { message: ErrorMessage; domain: 'global'; reason: 'invalid' }[];
  message: string;
};

export type UserData = {
  token: string;
  refreshToken: string;
  expirationTime: string;
  userName: string;
  userSurname: string;
  userId: string;
};

export type ReauthenticateData = {
  token: string;
  refreshToken: string;
  expirationTime: string;
};

const updateLocalStorage = (
  funcName: 'set' | 'remove',
  payload?: { [key: string]: string }
) => {
  const keys = [
    'token',
    'refreshToken',
    'expirationTime',
    'userId',
    'userName',
    'userSurname',
  ];

  if (funcName === 'set') {
    for (const key in payload) {
      if (keys.includes(key)) {
        localStorage.setItem(key, payload[key]);
      }
    }
  }

  if (funcName === 'remove') {
    keys.forEach((key) => localStorage.removeItem(key));
  }
};

export { updateLocalStorage };
