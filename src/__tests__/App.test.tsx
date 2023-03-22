import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { App } from '../App';
import { mockedStore } from '../shared/testUtils/mockedStore';
import { renderWithProviders } from '../shared/testUtils/testUtils';

describe('Application rendering', () => {
  it('Renders application with correct routing', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      {
        preloadedState: mockedStore,
      }
    );

    const searchRoomsLink = screen.getByText(/подобрать номер/);
    expect(searchRoomsLink).toBeInTheDocument();
    fireEvent.click(searchRoomsLink);
    expect(await screen.findByTitle(/ожидание загрузки/i)).toBeInTheDocument();

    const aboutLink = screen.getByText(/о нас/);
    expect(aboutLink).toBeInTheDocument();
    fireEvent.click(aboutLink);
    expect(
      await screen.findByText(/Найдём номера под ваши пожелания/i)
    ).toBeInTheDocument();

    const serviceLink = screen.getByText(/услуги/);
    expect(serviceLink).toBeInTheDocument();
    fireEvent.click(serviceLink);
    expect(await screen.findByText(/404/i)).toBeInTheDocument();
  });
});
