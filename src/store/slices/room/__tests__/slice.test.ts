/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw';

import { server } from '../../../../shared/testUtils/server';
import {
  addFeedback as addFeedbackThunk,
  fetchRoomById as fetchRoomThunk,
} from '../slice';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const dispatch = jest.fn();

describe('Room', () => {
  it('successful room fetching', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                roomNumber: 2,
              },
            })
          );
        }
      )
    );
    const thunk = fetchRoomThunk(1);
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/fetchRoomById/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/fetchRoomById/fulfilled');
    expect(end[0].payload).toMatchObject({ roomNumber: 2 });
  });

  it('failed room fetching', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    const thunk = fetchRoomThunk(1);
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/fetchRoomById/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/fetchRoomById/rejected');
    expect(end[0].payload).toBe('Request failed with status code 404');
  });

  it('successful feedback adding', async () => {
    const date = new Date('2023-01-01');
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              1: {
                roomNumber: 2,
                feedback: {
                  feedbackID: {
                    text: 'feedback',
                    userId: 'testUser',
                    userName: 'Test User',
                    date,
                  },
                },
              },
            })
          );
        }
      )
    );
    const thunk = addFeedbackThunk({
      roomNumber: '2',
      path: 'feedback',
      text: 'feedback',
      userId: 'testUser',
      userName: 'Test User',
      date: new Date('2023-01-01'),
    });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/addFeedback/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/addFeedback/fulfilled');
    expect(end[0].payload).toMatchObject({
      roomNumber: 2,
      feedback: {
        feedbackID: {
          text: 'feedback',
          userId: 'testUser',
          userName: 'Test User',
          date: '2023-01-01T00:00:00.000Z',
        },
      },
    });
  });

  it('failed feedback adding', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    const thunk = addFeedbackThunk({
      roomNumber: '2',
      path: 'feedback',
      text: 'feedback',
      userId: 'testUser',
      userName: 'Test User',
      date: new Date('2023-01-01'),
    });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/addFeedback/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/addFeedback/rejected');
    expect(end[0].payload).toBe('Request failed with status code 404');
  });
});
