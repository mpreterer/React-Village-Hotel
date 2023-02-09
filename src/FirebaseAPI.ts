/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from 'axios';
import { initializeApp } from 'firebase/app';

import { RoomData } from './types/RoomData';

class FirebaseAPI {
  constructor() {
    FirebaseAPI.init();
  }

  static init() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCzs3m1T-AwNOuezc9VVx8gWcrndQyIisY',
      authDomain: 'react-village-d5bce.firebaseapp.com',
      projectId: 'react-village-d5bce',
      storageBucket: 'react-village-d5bce.appspot.com',
      messagingSenderId: '903474401236',
      appId: '1:903474401236:web:4e87d7adb9bc43c9361041',
      measurementId: 'G-PHSNLX928V',
    };

    initializeApp(firebaseConfig);
  }

  static async fetchRooms(rejectWithValue: (value: string) => any) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await axios.get(
        'https://react-village-d5bce-default-rtdb1.firebaseio.com/rooms.json'
      );
      return data as RoomData[];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
}

const FirebaseAPIInstance = new FirebaseAPI();

export { FirebaseAPI, FirebaseAPIInstance };
