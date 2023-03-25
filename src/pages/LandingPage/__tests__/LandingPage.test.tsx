import '@testing-library/jest-dom';

import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { LandingPage } from '../LandingPage';

describe('LandingPage component rendering', () => {
  it('LandingPage layout matches the snapshot', () => {
    const application = renderWithProviders(<LandingPage />);

    expect(application).toMatchSnapshot();
  });
});
