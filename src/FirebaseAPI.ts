import axios from 'axios';

import { RoomData } from './types/RoomData';

const axiosInstance = axios.create({
  baseURL: 'https://react-village-d5bce-default-rtdb.firebaseio.com/',
});

const FirebaseAPI = {
  fetchRooms: async () => axiosInstance.get<RoomData[]>('rooms.json'),
};

export { FirebaseAPI };
