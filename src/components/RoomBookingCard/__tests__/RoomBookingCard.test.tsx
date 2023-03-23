/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DropdownGuestsIds } from '../../../shared/constants/DropdownGuestsIds';
import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../../../store/slices/auth/slice';
import {
  BookingRoom as BookingRoomSliceProps,
  initialState as initialStateProfile,
} from '../../../store/slices/profile/slice';
import {
  Props as RoomBookingCardProps,
  RoomBookingCard,
} from '../RoomBookingCard';

describe('RoomBookingCard', () => {
  let mockRoom: RoomBookingCardProps;
  let sliceProfile: BookingRoomSliceProps;

  beforeAll(() => {
    sliceProfile = {
      roomNumber: 101,
      price: 2000,
      feedbackCount: 10,
      totalAmount: 6000,
      additionalService: 2730,
      discount: 300,
      bookedDates: {
        '0': {
          dates: {
            from: '20.03.2023',
            to: '22.03.2023',
          },
          userId: 'USER_ID',
        },
        '1': {
          dates: {
            from: '25.03.2023',
            to: '29.03.2023',
          },
          userId: 'USER_ID_2',
        },
      },
      bookingStatus: true,
      bookingId: 'ROOM101',
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
        from: '24.03.2023',
        to: '25.03.2023',
      },
    };

    mockRoom = {
      id: '1',
      roomNumber: 101,
      price: 2000,
      feedbackCount: 10,
      rateNumber: 4,
      totalAmount: 6000,
      imgsSrc: [],
      bookedDates: {
        from: '20.03.2023',
        to: '22.03.2023',
      },
      bookingStatus: true,
      bookingId: 'ROOM101',
      isLux: false,
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
    };
  });

  it('renders correctly', async () => {
    const RoomBookingCardComponent = renderWithProviders(
      <BrowserRouter>
        <RoomBookingCard {...mockRoom} />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'USER_ID',
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

    expect(await screen.findByText('Отмена')).not.toBeInTheDocument();
    expect(RoomBookingCardComponent).toMatchSnapshot();
  });

  it('opens modal on "Подробнее" button click', () => {
    renderWithProviders(
      <BrowserRouter>
        <RoomBookingCard {...mockRoom} />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'USER_ID',
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

    const detailsButton = screen.getByText('Подробнее');
    fireEvent.click(detailsButton);

    expect(screen.getByTestId('booking-details-modal')).toBeInTheDocument();
  });

  it('cancels booking on "Отмена" button click', async () => {
    renderWithProviders(
      <BrowserRouter>
        <RoomBookingCard {...mockRoom} />
      </BrowserRouter>,
      {
        preloadedState: {
          ...mockedStore,
          auth: {
            ...authInitialState,
            isAuth: true,
            userName: 'UserName',
            userSurname: 'UserSurname',
            userId: 'USER_ID',
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

    const cancelBookingButton = screen.getByText('Отмена');
    fireEvent.click(cancelBookingButton);

    expect(screen.getByText('Отмена брони...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('promise-alert')).toHaveClass(
        'toastify__alert_success'
      );
    });
  });
});
