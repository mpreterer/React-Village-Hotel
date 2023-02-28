import axios, { AxiosResponse } from 'axios';

import {
  AuthResponseData,
  ReAuthPostData,
  ReAuthResponseData,
  SignInData,
  SignUpData,
  SignUpPostData,
} from './types/AuthData';
import {
  BookingRequestData,
  BookingResponseData,
  BookingsData,
  ReserveDatesData,
} from './types/BookingData';
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

  fetchBookingsByUserId: async (userId: string) =>
    axiosInstance.get<BookingsData>(`users/${userId}.json`),

  reserveDates: async ({ sequenceNumber, dates, userId }: ReserveDatesData) =>
    axiosInstance.post<BookingResponseData>(
      `rooms/${sequenceNumber}/bookedDates.json`,
      {
        dates,
        userId,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    ),

  makeBooking: async ({
    roomNumber,
    userId,
    discount,
    additionalService,
    totalAmount,
    dates,
    guests,
  }: BookingRequestData) =>
    axiosInstance.post<BookingResponseData>(
      `users/${userId}/booking.json`,
      {
        roomNumber,
        discount,
        additionalService,
        totalAmount,
        dates,
        guests,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    ),
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
};

export { FirebaseAPI };
