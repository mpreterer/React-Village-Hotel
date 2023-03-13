/* eslint-disable @typescript-eslint/no-misused-promises */
import axios, { AxiosResponse } from 'axios';
import { initializeApp } from 'firebase/app';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import { changeFeedbackInfo } from './shared/helpers/changeFeedbackInfo/changeFeedbackInfo';
import {
  AuthResponseData,
  ReAuthPostData,
  ReAuthResponseData,
  SignInData,
  SignUpData,
  SignUpPostData,
} from './types/AuthData';
import { BookingRequestData, BookingResponseData } from './types/BookingData';
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

  makeBooking: async ({
    sequenceNumber,
    roomNumber,
    userId,
    discount,
    additionalService,
    totalAmount,
    dates,
    guests,
  }: BookingRequestData) => {
    const { status, data } = await axiosInstance.post<BookingResponseData>(
      `rooms/${sequenceNumber}/bookedDates.json`,
      {
        dates,
        userId,
      }
    );
    if (status === 200) {
      axiosInstance.post<BookingResponseData>(`users/${userId}/booking.json`, {
        roomNumber,
        discount,
        additionalService,
        totalAmount,
        dates,
        guests,
      });
    }
    return data;
  },

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

  updateProfilePicture: async (file: File, userId: string, token: string) => {
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

    const { data: roomsData } = await FirebaseAPI.fetchRooms();

    roomsData.forEach(async ({ feedback }, index) => {
      if (feedback) {
        const newFeedback = changeFeedbackInfo<string>(
          userId,
          'profilePicture',
          url,
          feedback
        );

        await axios.put(
          `https://test-toxin-default-rtdb.europe-west1.firebasedatabase.app/rooms/${index}/feedback.json`,
          {
            ...newFeedback,
          }
        );
      }
    });
    return url;
  },

  updateUserName: async ({
    name,
    surname,
    userId,
    token,
  }: {
    userId: string;
    token: string;
    name: string;
    surname: string;
  }) => {
    const displayName = `${name} ${surname}`;

    const { data } = await authInstance.post<
      AuthResponseData,
      AxiosResponse<AuthResponseData>,
      { idToken: string; displayName: string }
    >('accounts:update', {
      idToken: token,
      displayName,
    });

    const { data: roomsData } = await FirebaseAPI.fetchRooms();

    roomsData.forEach(async ({ feedback }, index) => {
      if (feedback) {
        const newFeedback = changeFeedbackInfo<string>(
          userId,
          'userName',
          displayName,
          feedback
        );

        await axios.put(
          `https://test-toxin-default-rtdb.europe-west1.firebasedatabase.app/rooms/${index}/feedback.json`,
          {
            ...newFeedback,
          }
        );
      }
    });

    return data.displayName;
  },
};

export { FirebaseAPI };
