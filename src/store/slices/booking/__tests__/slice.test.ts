/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { DropdownGuestsIds } from '../../../../shared/constants/DropdownGuestsIds';
import { makeBooking as makeBookingThunk } from '../slice';

const server = setupServer(
  rest.post(
    'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms/0/bookedDates.json',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ name: 'booking123' }));
    }
  ),
  rest.get(
    'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          roomNumber: 1,
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const dispatch = jest.fn();

const bookingData = {
  roomNumber: 1,
  discount: 800,
  additionalService: 1500,
  totalAmount: 6500,
  dates: { from: '01.04.2023', to: '03.04.2023' },
  guests: [{ id: DropdownGuestsIds.ADULTS, name: 'взрослые', amount: 2 }],
  bookingStatus: true,
};

describe('Booking', () => {
  it('successfull booking', async () => {
    const thunk = makeBookingThunk({
      ...bookingData,
      userId: 'testUser',
    });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('booking/makeBooking/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('booking/makeBooking/fulfilled');
    expect(end[0].payload).toMatchObject(bookingData);
    expect(end[0].payload).toHaveProperty('bookingId');
  });

  it('booking failure', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    const thunk = makeBookingThunk({
      ...bookingData,
      userId: 'testUser',
    });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('booking/makeBooking/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('booking/makeBooking/rejected');
    expect(end[0].payload).toBe('Request failed with status code 404');
  });

  it('room already booked', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              bookedDates: {
                bookedDates: {
                  bookingID: {
                    dates: { from: '01.04.2023', to: '03.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
              roomNumber: 1,
            })
          );
        }
      )
    );
    const thunk = makeBookingThunk({
      ...bookingData,
      userId: 'testUser',
    });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('booking/makeBooking/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('booking/makeBooking/rejected');
    expect(end[0].payload).toBe(
      'На данный период проживания комната уже забронирована'
    );
  });
});
