import { initialState as authInitialState } from '../../store/slices/auth/slice';
import { initialState as bookingInitialState } from '../../store/slices/booking/slice';
import { initialState as filtersInitialState } from '../../store/slices/filters/slice';
import { initialState as profileInitialState } from '../../store/slices/profile/slice';
import { initialState as roomInitialState } from '../../store/slices/room/slice';
import { initialState as roomsInitialState } from '../../store/slices/rooms/slice';

const mockedStore = {
  auth: authInitialState,
  filters: filtersInitialState,
  rooms: roomsInitialState,
  room: roomInitialState,
  booking: bookingInitialState,
  profile: profileInitialState,
};

export { mockedStore };
