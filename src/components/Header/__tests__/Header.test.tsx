/* eslint-disable testing-library/render-result-naming-convention */
import { BrowserRouter } from 'react-router-dom';

import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { Header } from '../Header';

jest.mock('axios');

describe('Header component rendering', () => {
  it('Renders Header component', () => {
    const headerComponent = renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {
        preloadedState: mockedStore,
      }
    );

    expect(headerComponent).toMatchSnapshot();
  });
});
