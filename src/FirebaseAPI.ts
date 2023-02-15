/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios, { AxiosError } from 'axios';

import { RoomData } from './types/RoomData';

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

const FirebaseAPI = {
  async fetchRooms(rejectWithValue: (value: string) => any) {
    try {
      const { data } = await axiosInstance.get<RoomData[]>('rooms.json');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  },

  async fetchRoomById(rejectWithValue: (value: string) => any, id: number) {
    try {
      const { data } = await axiosInstance.get<Record<string, RoomData>>(
        'rooms.json',
        {
          params: {
            orderBy: '"roomNumber"',
            equalTo: id,
          },
        }
      );

      if (Object.values(data)[0] === undefined) {
        throw new AxiosError('Room not found');
      }

      return Object.values(data)[0];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue('An unexpected error occurred');
    }
  },
};

export { FirebaseAPI };
