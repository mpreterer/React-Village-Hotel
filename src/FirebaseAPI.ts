/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

import { RoomData } from './types/RoomData';

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

const FirebaseAPI = {
  fetchRoomById: async (
    rejectWithValue: (value: string) => any,
    id: number
  ) => {
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

      return data[Object.keys(data)[0]];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  },

  fetchRooms: async () => axiosInstance.get<RoomData[]>('rooms.json'),
};

export { FirebaseAPI };
