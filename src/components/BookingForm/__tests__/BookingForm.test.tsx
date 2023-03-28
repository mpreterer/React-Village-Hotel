import { ToastContainer } from 'react-toastify';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { setPromiseAlert, updatePromiseAlert } from '../../../libs/toastify';
import { DAYS_DECLENSIONS } from '../../../shared/constants/daysDeclensions';
import { DropdownGuestsIds } from '../../../shared/constants/DropdownGuestsIds';
import { getDaysBetweenDate } from '../../../shared/helpers/getDaysBetweenDate/getDaysBetweenDate';
import { getWordDeclension } from '../../../shared/helpers/getWordDeclension/getWordDeclension';
import { moneyFormat } from '../../../shared/helpers/moneyFormat/moneyFormat';
import { mockedStore } from '../../../shared/testUtils/mockedStore';
import { renderWithProviders } from '../../../shared/testUtils/testUtils';
import { initialState as authInitialState } from '../../../store/slices/auth/slice';
import { initialState as bookingInitialState } from '../../../store/slices/booking/slice';
import { RoomData } from '../../../types/RoomData';
import { BookingForm } from '../BookingForm';
import { BOOKING_FORM_TOAST_ID } from '../constants';

describe('BookingForm', () => {
  let roomSlice: RoomData;

  const capacity = [
    {
      id: DropdownGuestsIds.ADULTS,
      amount: 1,
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
  ];

  const selectedDates = [new Date('2023.01.26'), new Date('2023.01.29')];
  const userId = 'TEST_USER_ID';

  beforeAll(() => {
    roomSlice = {
      capacity: [
        {
          id: 'guest',
          limit: 5,
        },
        {
          id: 'baby',
          limit: 2,
        },
      ],
      details: {
        withBabyBed: true,
        withBabyChair: true,
        withBreakfast: true,
        withDesk: true,
        withGuests: true,
        withShampoo: true,
        withTV: true,
        withWideHallway: true,
      },
      furniture: [
        {
          id: 'bedrooms',
          limit: 2,
        },
        {
          id: 'beds',
          limit: 4,
        },
        {
          id: 'bathrooms',
          limit: 2,
        },
      ],
      images: [
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-6.jpg?alt=media&token=24f59247-ef0f-40ab-9069-99cad150a18c',
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-4.jpg?alt=media&token=e40e1dfb-468a-4320-891c-f257de2972cc',
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-5.jpg?alt=media&token=71bc8e42-22d2-47bd-b408-2cd1baf49dfa',
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-7.jpg?alt=media&token=e63cb701-2476-4249-af21-9157d17efc88',
      ],
      imagesDetailed: [
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-4.jpg?alt=media&token=e40e1dfb-468a-4320-891c-f257de2972cc',
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-5.jpg?alt=media&token=71bc8e42-22d2-47bd-b408-2cd1baf49dfa',
        'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-details-6.jpg?alt=media&token=24f59247-ef0f-40ab-9069-99cad150a18c',
      ],
      information: {
        comfort: true,
        convenience: true,
        cosiness: true,
        freeBreakfast: true,
        laundry: true,
      },
      isLux: true,
      price: 12000,
      rating: 5,
      reservedDates: [],
      feedbackCount: 0,
      roomNumber: 1,
    };
  });

  it('should render component', () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        roomNumber={roomSlice.roomNumber}
        guestItems={[]}
        selectedDate={[]}
        userId={null}
      />,
      {
        preloadedState: {
          ...mockedStore,
        },
      }
    );

    const form = screen.getByTestId('booking-form');
    expect(form).toBeInTheDocument();
  });

  it('should render button sign-up when user is not auth', () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        isLux={roomSlice.isLux}
        roomNumber={roomSlice.roomNumber}
        guestItems={[]}
        selectedDate={[]}
        userId={null}
      />,
      {
        preloadedState: {
          ...mockedStore,
        },
      }
    );

    const signUpButton = screen.getByText(/зарегистрироваться/i);
    expect(signUpButton).toBeInTheDocument();
  });

  it('should render booking button when user is auth', () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        isLux={roomSlice.isLux}
        roomNumber={roomSlice.roomNumber}
        guestItems={[]}
        selectedDate={[]}
        userId={userId}
      />,
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
        },
      }
    );

    const bookingButton = screen.getByText(/забронировать/i);
    expect(bookingButton).toBeInTheDocument();
  });

  it('should render form with selected dates', () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        isLux={roomSlice.isLux}
        roomNumber={roomSlice.roomNumber}
        guestItems={[]}
        selectedDate={selectedDates}
        userId={userId}
      />,
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
        },
      }
    );

    const days = getDaysBetweenDate(selectedDates);

    const servicesText = `${moneyFormat.to(
      roomSlice.price
    )} x ${days} ${getWordDeclension(
      getDaysBetweenDate(selectedDates),
      DAYS_DECLENSIONS
    )}`;
    const servicesPrice = `${moneyFormat.to(roomSlice.price * days)}`;

    const servicesTextElement = screen.getByText(servicesText);
    const servicesPriceElement = screen.getByText(servicesPrice);
    expect(servicesTextElement).toHaveTextContent('12 000₽ x 3 суток');
    expect(servicesPriceElement).toHaveTextContent('36 000₽');
    expect(screen.getByText('34 121₽')).toBeInTheDocument();
  });

  it(`booking button should be disabled
      when booking button is clicked`, () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        isLux={roomSlice.isLux}
        roomNumber={roomSlice.roomNumber}
        guestItems={capacity}
        selectedDate={selectedDates}
        userId={userId}
      />,
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
        },
      }
    );

    const bookingButton = screen.getByText(/забронировать/i);
    userEvent.click(bookingButton);
    expect(bookingButton).toBeDisabled();
  });

  it('should render loading and success alerts for booking', async () => {
    renderWithProviders(
      <>
        <ToastContainer position="top-right" newestOnTop />
        <BookingForm
          price={roomSlice.price}
          isLux={roomSlice.isLux}
          roomNumber={roomSlice.roomNumber}
          guestItems={capacity}
          selectedDate={selectedDates}
          userId={userId}
        />
      </>,
      {
        preloadedState: {
          ...mockedStore,
          booking: {
            ...bookingInitialState,
            status: 'resolved',
          },
        },
      }
    );

    setPromiseAlert(BOOKING_FORM_TOAST_ID, 'Бронирование...');
    expect(await screen.findByText(/Бронирование.../i)).toBeInTheDocument();

    updatePromiseAlert(
      BOOKING_FORM_TOAST_ID,
      'success',
      'Бронирование подтверждено'
    );
    expect(
      await screen.findByText(/Бронирование подтверждено/i)
    ).toBeInTheDocument();
  });

  it('should render loading and error alerts for booking', async () => {
    renderWithProviders(
      <>
        <ToastContainer position="top-right" newestOnTop />
        <BookingForm
          price={roomSlice.price}
          isLux={roomSlice.isLux}
          roomNumber={roomSlice.roomNumber}
          guestItems={capacity}
          selectedDate={selectedDates}
          userId={userId}
        />
      </>,
      {
        preloadedState: {
          ...mockedStore,
          booking: {
            ...bookingInitialState,
            status: 'rejected',
            errorMessage:
              'На данный период проживания комната уже забронирована',
          },
        },
      }
    );

    setPromiseAlert(BOOKING_FORM_TOAST_ID, 'Бронирование...');
    expect(await screen.findByText(/Бронирование.../i)).toBeInTheDocument();

    updatePromiseAlert(
      BOOKING_FORM_TOAST_ID,
      'error',
      'На данный период проживания комната уже забронирована'
    );
    expect(
      await screen.findByText(
        /На данный период проживания комната уже забронирована/i
      )
    ).toBeInTheDocument();
  });

  it(`should dispatch updateCapacity
      when the dropdownGuests button is clicked`, () => {
    renderWithProviders(
      <BookingForm
        price={roomSlice.price}
        isLux={roomSlice.isLux}
        roomNumber={roomSlice.roomNumber}
        guestItems={capacity}
        selectedDate={selectedDates}
        userId={userId}
      />,
      {
        preloadedState: {
          ...mockedStore,
        },
      }
    );

    const buttonsPlus = screen.getAllByText('+');
    const buttonsMinus = screen.getAllByText('-');
    userEvent.click(buttonsPlus[0]);
    userEvent.click(buttonsMinus[0]);
    expect(screen.getByPlaceholderText('Сколько гостей')).toHaveValue(
      '2 гостя'
    );
  });
});
