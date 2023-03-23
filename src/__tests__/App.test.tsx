import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { App } from '../App';
import { mockedStore } from '../shared/testUtils/mockedStore';
import { renderWithProviders } from '../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../store/slices/auth/slice';
import { initialState as roomsInitialState } from '../store/slices/rooms/slice';

describe('Application rendering', () => {
  it(`Renders application with correct routing 
  when user is not authorized`, async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      {
        preloadedState: mockedStore,
      }
    );

    fireEvent.click(screen.getByText(/подобрать номер/));
    expect(await screen.findByTitle(/ожидание загрузки/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/о нас/));
    expect(
      await screen.findByText(/Найдём номера под ваши пожелания/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText(/услуги/));
    expect(await screen.findByText(/404/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/войти/));
    expect(await screen.findByText('Войти')).toBeInTheDocument();
    expect(
      await screen.findByText('Нет аккаунта на Toxin?')
    ).toBeInTheDocument();
    expect(await screen.findByText('создать')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/зарегистрироваться/));
    expect(await screen.findByText('Регистрация аккаунта')).toBeInTheDocument();
  });

  it(`Renders application with correct routing 
  when user is authorized`, async () => {
    const room = {
      roomNumber: 111,
      furniture: [
        { id: 'bedrooms', limit: 1 },
        { id: 'beds', limit: 2 },
        { id: 'bathrooms', limit: 2 },
      ],
      capacity: [{ id: 'guest', limit: 2 }],
      reservedDates: [{ from: '', to: '' }],
      details: {},
      images: [''],
      imagesDetailed: [''],
      isLux: false,
      price: 5500,
      rating: 4,
      feedbackCount: 2,
      information: {},
    };
    const app = renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'TestName',
            userSurname: 'TestSurname',
          },
          rooms: {
            ...roomsInitialState,
            rooms: [room],
            errorMessage: null,
            status: 'resolved',
          },
        },
      }
    );

    fireEvent.pointerDown(screen.getByText('TestName TestSurname'));
    expect(
      await screen.findByText('Забронированные номера')
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText(/о нас/));
    fireEvent.click(screen.getByText(/подобрать номер/));
    expect(await screen.findByText('111')).toBeInTheDocument();
    fireEvent.click(await screen.findByText('111'));

    expect(app).toMatchSnapshot();
  });
});
