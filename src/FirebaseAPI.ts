import axios, { AxiosResponse } from 'axios';

import {
  AuthResponseData,
  ReAuthPostData,
  ReAuthResponseData,
  SignInData,
  SignUpData,
  SignUpPostData,
} from './types/AuthData';
import { BookingRequestData, BookingResponseData } from './types/BookingData';
import { ReplyData, ReviewListData } from './types/ReviewData';
import { RoomData } from './types/RoomData';

const API_KEY = 'AIzaSyCzs3m1T-AwNOuezc9VVx8gWcrndQyIisY';

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

  addReply: async ({
    path,
    sequenceNumber,
    text,
    userId,
    date,
    userName,
  }: ReplyData) =>
    axiosInstance.post<{ name: string }>(
      `rooms/${sequenceNumber}/${path}.json`,
      {
        text,
        userId,
        date,
        userName,
        path,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    ),

  fetchReviewsByRoomId: async (id: number) =>
    axiosInstance.get<ReviewListData>(`rooms/${id}/reviews.json`, {}),

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
};

export { FirebaseAPI };
