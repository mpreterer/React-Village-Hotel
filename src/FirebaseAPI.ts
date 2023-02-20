import axios, { AxiosResponse } from 'axios';

import {
  AuthResponseData,
  SignInData,
  SignUpData,
  SignUpPostData,
} from './types/AuthData';
import { RoomData } from './types/RoomData';

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

const authInstance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});

const APIKey = 'AIzaSyCzs3m1T-AwNOuezc9VVx8gWcrndQyIisY';

const FirebaseAPI = {
  fetchRooms: async () => axiosInstance.get<RoomData[]>('rooms.json'),
  fetchRoomById: async (id: number) =>
    axiosInstance.get<Record<string, RoomData>>('rooms.json', {
      params: {
        orderBy: '"roomNumber"',
        equalTo: id,
      },
    }),
  singUp: async ({ email, password, name, surname }: SignUpData) =>
    authInstance.post<
      AuthResponseData,
      AxiosResponse<AuthResponseData>,
      SignUpPostData
    >(
      'accounts:signUp',
      {
        email,
        password,
        displayName: `${name} ${surname}`,
        returnSecureToken: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: APIKey,
        },
      }
    ),
  signIn: async ({ email, password }: Omit<SignInData, 'returnSecureToken'>) =>
    authInstance.post<
      AuthResponseData,
      AxiosResponse<AuthResponseData>,
      SignInData
    >(
      'accounts:signInWithPassword',
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: APIKey,
        },
      }
    ),
};

export { FirebaseAPI };
