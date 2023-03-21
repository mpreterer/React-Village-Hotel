/* eslint-disable testing-library/render-result-naming-convention */
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../../../store/slices/auth/slice';
import { Header } from '../Header';

describe('Header component rendering', () => {
  it(`Renders links to SignIn and Registration pages 
  if user is not authorized`, () => {
    const header = renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {
        preloadedState: mockedStore,
      }
    );

    expect(header).toMatchSnapshot();

    expect(screen.getByText(/о нас/)).toBeInTheDocument();
    expect(screen.getByText(/услуги/)).toBeInTheDocument();
    expect(screen.getByText(/вакансии/)).toBeInTheDocument();
    expect(screen.getByText(/новости/)).toBeInTheDocument();
    expect(screen.getByText(/соглашения/)).toBeInTheDocument();
    expect(screen.getByText(/войти/)).toBeInTheDocument();
    expect(screen.getByText(/зарегистрироваться/)).toBeInTheDocument();
    expect(screen.queryByText(/name/)).not.toBeInTheDocument();
    expect(screen.queryByText(/surname/)).not.toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('Renders link to Profile page if user is authorized', () => {
    renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'name',
            userSurname: 'surname',
          },
        },
      }
    );
    expect(screen.getByText(/о нас/)).toBeInTheDocument();
    expect(screen.getByText(/услуги/)).toBeInTheDocument();
    expect(screen.getByText(/вакансии/)).toBeInTheDocument();
    expect(screen.getByText(/новости/)).toBeInTheDocument();
    expect(screen.getByText(/соглашения/)).toBeInTheDocument();
    expect(screen.getByText(/name/)).toBeInTheDocument();
    expect(screen.getByText(/surname/)).toBeInTheDocument();
    expect(screen.queryByText(/войти/)).not.toBeInTheDocument();
    expect(screen.queryByText(/зарегистрироваться/)).not.toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
