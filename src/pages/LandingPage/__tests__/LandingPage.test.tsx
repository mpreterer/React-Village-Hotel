/* eslint-disable @typescript-eslint/await-thenable */
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { LandingPage } from '../LandingPage';

describe('LandingPage component rendering', () => {
  it('LandingPage layout matches the snapshot', () => {
    const application = renderWithProviders(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      {
        preloadedState: mockedStore,
      }
    );

    expect(application).toMatchSnapshot();
  });
});
