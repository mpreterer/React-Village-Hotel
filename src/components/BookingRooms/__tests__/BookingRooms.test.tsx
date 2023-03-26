import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { AxiosErrorMessages } from '../../../libs/toastify/index';
import { DropdownGuestsIds } from '../../../shared/constants/DropdownGuestsIds';
import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../../../store/slices/auth/slice';
import {
  BookingRoom as BookingRoomSliceProps,
  initialState as initialStateProfile,
} from '../../../store/slices/profile/slice';
import { CANCELLATION } from '../../RoomBookingCard/constants';
import { BookingRooms } from '../BookingRooms';

import { mockBookingRooms } from './costants';

describe('RoomBookingCard', () => {
  let sliceProfile: BookingRoomSliceProps;
  let sliceProfileWithNotLivedRoom: BookingRoomSliceProps;

  beforeAll(() => {
    sliceProfile = {
      roomNumber: 1,
      price: 2000,
      feedbackCount: 10,
      totalAmount: 6000,
      additionalService: 2730,
      discount: 300,
      bookedDates: {
        '0': {
          dates: {
            from: '21.03.2023',
            to: '22.03.2023',
          },
          userId: 'TEST_USER_ID',
        },
        '1': {
          dates: {
            from: '25.03.2023',
            to: '29.03.2023',
          },
          userId: 'TEST_USER_ID_2',
        },
      },
      bookingStatus: true,
      bookingId: 'ROOM1',
      capacity: [{ id: 'guest', limit: 5 }],
      isLux: false,
      furniture: [
        { id: 'bedrooms', limit: 1 },
        { id: 'beds', limit: 2 },
        { id: 'bathrooms', limit: 2 },
      ],
      reservedDates: [{ from: '', to: '' }],
      details: {},
      images: [''],
      imagesDetailed: [''],
      rating: 4,
      information: {},
      guests: [
        {
          id: DropdownGuestsIds.ADULTS,
          amount: 2,
          name: 'Взрослые',
        },
        {
          id: DropdownGuestsIds.CHILDREN,
          amount: 1,
          name: 'Дети',
        },
        {
          id: DropdownGuestsIds.BABIES,
          amount: 0,
          name: 'Младенцы',
        },
      ],
      dates: {
        from: '21.03.2023',
        to: '22.03.2023',
      },
    };

    sliceProfileWithNotLivedRoom = {
      ...sliceProfile,
      ...{
        dates: {
          from: '05.04.2023',
          to: '06.04.2023',
        },
      },
      bookedDates: {
        '0': {
          dates: {
            from: '05.04.2023',
            to: '06.04.2023',
          },
          userId: 'TEST_USER_ID',
        },
      },
      bookingStatus: false,
    };
  });

  it('renders correctly', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [sliceProfile],
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );

    const priceElements = screen.getAllByText('6 000₽');
    const priceElement = priceElements[0];

    expect(
      screen.queryByRole('button', { name: 'Отмена' })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Подробнее' })
    ).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(screen.getByText('отзывов')).toBeInTheDocument();
    expect(screen.getByText('Общая стоимость')).toBeInTheDocument();
  });

  it('opens modal on "Подробнее" button click', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [sliceProfile],
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );
    const modal = screen.getByTestId('booking-details-modal');
    const overlay = screen.getByTestId('modal-overlay');
    const closeModal = screen.getByTestId('modal-close-btn');
    const detailsButton = screen.getByRole('button', {
      name: 'Подробнее',
    });

    userEvent.click(detailsButton);

    expect(modal).toHaveClass('modal_active');

    userEvent.click(closeModal);
    expect(modal).not.toHaveClass('modal_active');

    userEvent.click(detailsButton);
    expect(modal).toHaveClass('modal_active');

    userEvent.click(overlay);
    expect(modal).not.toHaveClass('modal_active');
  });

  it('cancels booking on "Отмена" button click', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [sliceProfileWithNotLivedRoom],
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );

    const cancelBookingButton = screen.getByRole('button', { name: 'Отмена' });
    expect(cancelBookingButton).not.toBeDisabled();

    userEvent.click(cancelBookingButton);
    expect(cancelBookingButton).toBeDisabled();

    expect(
      screen.getByText('Бронирование не подтверждено')
    ).toBeInTheDocument();
  });

  test('displays correct date', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [],
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );

    expect(screen.getByText('У вас нет бронирований')).toBeInTheDocument();
    expect(screen.queryByText('Подробнее')).not.toBeInTheDocument();
  });

  test('get error if network off', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [],
            status: 'rejected',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: AxiosErrorMessages.NETWORK_ERROR,
            rateErrorMessage: null,
          },
        },
      }
    );

    expect(
      screen.getByText('Произошла ошибка, повторите позже')
    ).toBeInTheDocument();
  });

  test(`cancel button disabled if booking 
        canceling room loading and user get error`, async () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
        <ToastContainer position="top-right" newestOnTop />;
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: [sliceProfileWithNotLivedRoom],
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );

    const cancelBookingButton = screen.getByRole('button', { name: 'Отмена' });

    userEvent.click(cancelBookingButton);
    expect(cancelBookingButton).toBeDisabled();
    expect(
      await screen.findByText(CANCELLATION.IN_PROGRESS)
    ).toBeInTheDocument();
    expect(
      await screen.findByText('У вас нет бронирования этого номера')
    ).toBeInTheDocument();
  });

  test('make pagination', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookingRooms />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'TEST_USER_ID',
          },
          profile: {
            ...initialStateProfile,
            bookedRooms: mockBookingRooms,
            status: 'resolved',
            cancelBookingStatus: 'idle',
            rateStatus: 'idle',
            errorMessage: null,
            rateErrorMessage: null,
          },
        },
      }
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.queryByText('1014')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('arrow_forward'));

    const elementsTest = screen.getAllByText('1014');
    const elementToTest = elementsTest[0];

    expect(elementToTest).toBeInTheDocument();

    userEvent.click(screen.getByText('arrow_back'));
    expect(screen.queryByText('1014')).not.toBeInTheDocument();
  });
});
