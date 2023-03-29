import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../../../store/slices/auth/slice';
import { Header } from '../Header';

describe('Header component rendering', () => {
  it('Header layout matches the snapshot', () => {
    const header = renderWithProviders(<Header />);

    expect(header).toMatchSnapshot();
  });

  it(`Renders links to SignIn and Registration pages 
  if user is not authorized`, () => {
    renderWithProviders(<Header />);

    expect(screen.getByText('войти')).toBeInTheDocument();
    expect(screen.getByText('зарегистрироваться')).toBeInTheDocument();
    expect(screen.queryByText('TestName TestSurname')).not.toBeInTheDocument();
  });

  it('Renders link to Profile page if user is authorized', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        ...mockedStore,
        auth: {
          ...authInitialState,
          isAuth: true,
          userName: 'TestName',
          userSurname: 'TestSurname',
        },
      },
    });

    expect(screen.queryByText('войти')).not.toBeInTheDocument();
    expect(screen.queryByText('зарегистрироваться')).not.toBeInTheDocument();
    expect(screen.getByText('TestName TestSurname')).toBeInTheDocument();
  });
});
