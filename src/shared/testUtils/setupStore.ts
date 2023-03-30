import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../../store/index';

type RootState = ReturnType<typeof rootReducer>;

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export { setupStore };
export type { AppDispatch, AppStore, RootState };
