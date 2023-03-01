import { AsyncThunk } from '@reduxjs/toolkit';

import { RoomData } from '../../../types/RoomData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<RoomData, unknown, any>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type { FulfilledAction };
