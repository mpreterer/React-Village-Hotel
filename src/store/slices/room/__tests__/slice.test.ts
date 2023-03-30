/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { rest } from 'msw';

import { server } from '../../../../shared/testUtils/server';
import {
  addFeedback as addFeedbackThunk,
  changeLike as changeLikeThunk,
  fetchRoomById as fetchRoomThunk,
} from '../slice';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const dispatch = jest.fn();

const likeData = {
  roomNumber: '2',
  path: 'feedback/feedbackID/likes',
  userId: 'testUser',
};

const feedbackPayload = {
  text: 'feedback',
  userId: 'testUser',
  userName: 'Test User',
  date: '2023-01-01T00:00:00.000Z',
};

const feedbackData = {
  ...feedbackPayload,
  roomNumber: '2',
  path: 'feedback',
  date: new Date('2023-01-01'),
};

describe('Room', () => {
  it('Successful room fetching', async () => {
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

  it('Failed room fetching', async () => {
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

  it('Successful feedback adding', async () => {
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
                    ...feedbackPayload,
                    date,
                  },
                },
              },
            })
          );
        }
      )
    );
    const thunk = addFeedbackThunk(feedbackData);
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
      feedback: { feedbackID: feedbackPayload },
    });
  });

  it('Failed feedback adding', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    const thunk = addFeedbackThunk(feedbackData);
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

  it('Successful like adding', async () => {
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
                    ...feedbackPayload,
                    likes: { likeID: 'testUser' },
                  },
                },
              },
            })
          );
        }
      )
    );
    const thunk = changeLikeThunk({ ...likeData, isLiked: true });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/changeLike/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/changeLike/fulfilled');
    expect(end[0].payload).toMatchObject({
      roomNumber: 2,
      feedback: {
        feedbackID: {
          ...feedbackPayload,
          likes: { likeID: 'testUser' },
        },
      },
    });
  });

  it('Successful like removing', async () => {
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
                  feedbackID: feedbackPayload,
                },
              },
            })
          );
        }
      )
    );
    const thunk = changeLikeThunk({ ...likeData, isLiked: false });
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/changeLike/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/changeLike/fulfilled');
    expect(end[0].payload).toMatchObject({
      roomNumber: 2,
      feedback: {
        feedbackID: feedbackPayload,
      },
    });
  });

  it('Failed like adding', async () => {
    server.use(
      rest.get(
        'https://react-village-d5bce-default-rtdb.firebaseio.com/rooms.json',
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    const thunk = changeLikeThunk(likeData);
    await thunk(
      dispatch,
      () => {},
      () => {}
    );
    const [start, end] = dispatch.mock.calls;
    expect(start[0].type).toBe('room/changeLike/pending');
    expect(start[0].payload).toBe(undefined);
    expect(end[0].type).toBe('room/changeLike/rejected');
    expect(end[0].payload).toBe('Request failed with status code 404');
  });
});
