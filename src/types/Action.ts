import { AsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

type MatcherActions = PendingAction | FulfilledAction | RejectedAction;

export type { FulfilledAction, MatcherActions, PendingAction, RejectedAction };
