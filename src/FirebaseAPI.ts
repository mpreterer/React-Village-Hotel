/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios from 'axios';

import { RoomData } from './types/RoomData';

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

class FirebaseAPI {
  static async fetchRooms(rejectWithValue: (value: string) => any) {
    try {
      const { data } = await axiosInstance.get<RoomData[]>('rooms.json');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }

  static async fetchRoomById(
    rejectWithValue: (value: string) => any,
    id: number
  ) {
    try {
      const { data } = await axiosInstance.get<Record<string, RoomData>>(
        `https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json?orderBy="roomNumber"&equalTo=${id}`
      );

      return data[Object.keys(data)[0]];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
}

export { FirebaseAPI };
