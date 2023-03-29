/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw';

import { server } from '../../../../shared/testUtils/server';
import {
  fetchRooms as fetchRoomsThunk,
  initialState as roomsInitialState,
  roomsReducer,
} from '../slice';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const dispatch = jest.fn();

const roomsData = [
  {
    capacity: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    details: {
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withTV: true,
      withWideHallway: true,
    },
    furniture: [
      {
        id: 'bedrooms',
        limit: 2,
      },
      {
        id: 'beds',
        limit: 4,
      },
      {
        id: 'bathrooms',
        limit: 2,
      },
    ],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-6.jpg?alt=media&token=24f59247-ef0f-40ab-9069-99cad150a18c',
    ],
    imagesDetailed: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-4.jpg?alt=media&token=e40e1dfb-468a-4320-891c-f257de2972cc',
    ],
    information: {
      comfort: true,
      convenience: true,
      cosiness: true,
      freeBreakfast: true,
      laundry: true,
    },
    isLux: true,
    price: 12000,
    rating: 5,
    reservedDates: [
      {
        from: '20.02.2023',
        to: '21.02.2023',
      },
    ],
    feedbackCount: 155,
    roomNumber: 1,
    votes: [
      {
        count: 2,
        rating: 1,
      },
    ],
  },
  {
    capacity: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    details: {
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withTV: true,
      withWideHallway: true,
    },
    furniture: [
      {
        id: 'bedrooms',
        limit: 2,
      },
      {
        id: 'beds',
        limit: 4,
      },
      {
        id: 'bathrooms',
        limit: 2,
      },
    ],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-6.jpg?alt=media&token=24f59247-ef0f-40ab-9069-99cad150a18c',
    ],
    imagesDetailed: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-4.jpg?alt=media&token=e40e1dfb-468a-4320-891c-f257de2972cc',
    ],
    information: {
      comfort: true,
      convenience: true,
      cosiness: true,
      freeBreakfast: true,
      laundry: true,
    },
    isLux: true,
    price: 12000,
    rating: 5,
    reservedDates: [
      {
        from: '20.02.2023',
        to: '21.02.2023',
      },
    ],
    feedbackCount: 155,
    roomNumber: 1,
    votes: [
      {
        count: 2,
        rating: 1,
      },
    ],
  },
];

describe('Rooms slice', () => {
  it('should have been fetched rooms successfully', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(roomsData));
        }
      )
    );

    const thunk = fetchRoomsThunk();

    await thunk(
      dispatch,
      () => {},
      () => {}
    );

    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('rooms/fetchRooms/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('rooms/fetchRooms/fulfilled');
    expect(end[0].payload).toMatchObject(roomsData);
  });

  it('should have been tried fetching rooms and got axios error', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );

    const thunk = fetchRoomsThunk();

    await thunk(
      dispatch,
      () => {},
      () => {}
    );

    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('rooms/fetchRooms/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('rooms/fetchRooms/rejected');
    expect(end[0].meta.rejectedWithValue).toBe(true);
    expect(end[0].payload).toBe('Request failed with status code 404');
  });
});
