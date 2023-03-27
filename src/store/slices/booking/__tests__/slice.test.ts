/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { DropdownGuestsIds } from '../../../../shared/constants/DropdownGuestsIds';
import { makeBooking as makeBookingThunk } from '../slice';

const server = setupServer(
  rest.post(
    'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms/1/bookedDates.json',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ bookingID: '123' }));
    }
  ),

  rest.post(
    'https://react-village-d5bce-default-rtdb.firebaseio.com/users/testUser/booking.json',
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.get(
    'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          1: {},
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
  it('successful booking - first booking of the room', async () => {
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

  it('successful booking - booking before existing bookings', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                bookedDates: {
                  bookingID1: {
                    dates: { from: '03.04.2023', to: '06.04.2023' },
                    userId: 'testUser',
                  },

                  bookingID2: {
                    dates: { from: '14.04.2023', to: '16.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
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
    expect(end[0].type).toBe('booking/makeBooking/fulfilled');
    expect(end[0].payload).toMatchObject(bookingData);
    expect(end[0].payload).toHaveProperty('bookingId');
  });

  it('successful booking - booking after existing bookings', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                bookedDates: {
                  bookingID1: {
                    dates: { from: '04.03.2023', to: '06.03.2023' },
                    userId: 'testUser',
                  },

                  bookingID2: {
                    dates: { from: '30.03.2023', to: '01.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
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
    expect(end[0].type).toBe('booking/makeBooking/fulfilled');
    expect(end[0].payload).toMatchObject(bookingData);
    expect(end[0].payload).toHaveProperty('bookingId');
  });

  it('successful booking - booking between existing bookings', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                bookedDates: {
                  bookingID1: {
                    dates: { from: '30.03.2023', to: '01.04.2023' },
                    userId: 'testUser',
                  },

                  bookingID2: {
                    dates: { from: '03.04.2023', to: '05.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
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
    expect(end[0].type).toBe('booking/makeBooking/fulfilled');
    expect(end[0].payload).toMatchObject(bookingData);
    expect(end[0].payload).toHaveProperty('bookingId');
  });

  it('booking failure - booking range is available partially', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                bookedDates: {
                  bookingID: {
                    dates: { from: '01.04.2023', to: '02.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
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

  it('booking failure - room already booked on the same dates', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                bookedDates: {
                  bookingID: {
                    dates: { from: '01.04.2023', to: '03.04.2023' },
                    userId: 'testUser',
                  },
                },
              },
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

  it('booking failure - data is undefined', async () => {
    server.use(
      rest.post(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms/1/bookedDates.json',
        (req, res, ctx) => {
          return res(ctx.status(200));
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
    expect(end[0].payload).toBe('Бронирование не подтверждено');
  });

  it('booking failure - unknown server error', async () => {
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
});
