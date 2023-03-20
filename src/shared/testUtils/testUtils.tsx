/* eslint-disable import/no-extraneous-dependencies */
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

import type { RootState } from '../../store';
import { rootReducer } from '../../store';

import { mockedStore } from './mockedStore';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: ReturnType<typeof setupStore>;
}

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = mockedStore,
    store = setupStore(mockedStore),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
