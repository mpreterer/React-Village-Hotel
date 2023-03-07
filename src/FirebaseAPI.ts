/* eslint-disable @typescript-eslint/no-misused-promises */
import axios, { AxiosResponse } from 'axios';
import { initializeApp } from 'firebase/app';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import {
  AuthResponseData,
  ReAuthPostData,
  ReAuthResponseData,
  SignInData,
  SignUpData,
  SignUpPostData,
} from './types/AuthData';
import { RoomData } from './types/RoomData';

type ChangePasswordData = {
  email: string;
  password: string;
  newPassword: string;
};

type ChangePasswordResponse = {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
};

const API_KEY = 'AIzaSyCzs3m1T-AwNOuezc9VVx8gWcrndQyIisY';
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'react-village-d5bce.firebaseapp.com',
  databaseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com',
  projectId: 'react-village-d5bce',
  storageBucket: 'react-village-d5bce.appspot.com',
  messagingSenderId: '903474401236',
  appId: '1:903474401236:web:4e87d7adb9bc43c9361041',
  measurementId: 'G-PHSNLX928V',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

const authInstance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  params: {
    key: API_KEY,
  },
});

const FirebaseAPI = {
  fetchRooms: async () => axiosInstance.get<RoomData[]>('rooms.json'),
  fetchRoomById: async (id: number) =>
    axiosInstance.get<Record<string, RoomData>>('rooms.json', {
      params: {
        orderBy: '"roomNumber"',
        equalTo: id,
      },
    }),

  signUp: async ({ email, password, name, surname }: SignUpData) =>
    authInstance.post<
      AuthResponseData,
      AxiosResponse<AuthResponseData>,
      SignUpPostData
    >('accounts:signUp', {
      email,
      password,
      displayName: `${name} ${surname}`,
      returnSecureToken: true,
    }),

  signIn: async ({ email, password }: Omit<SignInData, 'returnSecureToken'>) =>
    authInstance.post<
      AuthResponseData,
      AxiosResponse<AuthResponseData>,
      SignInData
    >('accounts:signInWithPassword', {
      email,
      password,
      returnSecureToken: true,
    }),

  reauthenticate: async (refreshToken: string) =>
    axios.post<
      ReAuthResponseData,
      AxiosResponse<ReAuthResponseData>,
      ReAuthPostData
    >(
      'https://securetoken.googleapis.com/v1/token',
      {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          key: API_KEY,
        },
      }
    ),

  changePassword: async function changePassword({
    email,
    password,
    newPassword,
  }: ChangePasswordData) {
    const {
      data: { idToken },
    } = await this.signIn({ email, password });
    return authInstance.post<ChangePasswordResponse>('accounts:update', {
      password: newPassword,
      idToken,
      returnSecureToken: true,
    });
  },

  deleteAccount: async function deleteAccount({
    email,
    password,
  }: Omit<SignInData, 'returnSecureToken'>) {
    const {
      data: { idToken },
    } = await this.signIn({ email, password });

    return authInstance.post('accounts:delete', {
      idToken,
    });
  },

  updateProfilePicture: async function updateProfilePicture(
    file: File,
    userId: string,
    token: string
  ) {
    const storageRef = ref(
      storage,
      `${userId}-avatar.${file.type.split('/')[1]}`
    );

    await uploadBytesResumable(storageRef, file, {
      contentType: file.type,
    });

    const url = await getDownloadURL(storageRef);
    await authInstance.post('accounts:update', {
      idToken: token,
      photoUrl: url,
    });

    const { data } = await this.fetchRooms();
    data.forEach(({ reviews }, index) => {
      if (reviews) {
        Object.entries(reviews).forEach(async ([id, review]) => {
          if (review.userId === userId) {
            await axiosInstance.post(`rooms/${index}/reviews/${id}.json`, {
              profilePicture: url,
            });
          }
        });
      }
    });
    return url;
  },

  updateUserName: async (
    userName: string,
    userSurname: string,
    rooms: RoomData[],
    userId: string,
    token: string
  ) => {
    const displayName = `${userName} ${userSurname}`;

    const { data } = await authInstance.post<AuthResponseData>(
      'accounts:update',
      {
        idToken: token,
        displayName,
        returnSecureToken: true,
      }
    );

    rooms.forEach(({ reviews }, index) => {
      if (reviews) {
        Object.entries(reviews).forEach(async ([id, review]) => {
          if (review.userId === userId) {
            await axiosInstance.post(`rooms/${index}/reviews/${id}.json`, {
              userName: displayName,
            });
          }
        });
      }
    });

    return data;
  },
};

export { FirebaseAPI };
