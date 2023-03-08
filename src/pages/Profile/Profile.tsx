import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';

import avatar from '../../assets/img/big-default-avatar.jpg';
import { BookingRooms } from '../../components/BookingRooms/BookingRooms';
import { Button } from '../../components/Button/Button';
import { ButtonEdit } from '../../components/ButtonEdit/ButtonEdit';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SCREENS } from '../../routes/endpoints';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { authSelect, userIdSelect } from '../../store/slices/auth/selectors';
import { authActions } from '../../store/slices/auth/slice';
import {
  cancelBookingStatusSelect,
  profileSelect,
} from '../../store/slices/profile/selectors';
import {
  BookingRoom,
  fetchBookedRooms,
} from '../../store/slices/profile/slice';

import './Profile.scss';

const Profile: FC = () => {
  const userId = useSelector(userIdSelect);
  const bookedRooms = useAppSelector(profileSelect);
  const { isAuth, userName, userSurname } = useSelector(authSelect);
  const cancelBookingStatus = useAppSelector(cancelBookingStatusSelect);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [confirmedRooms, setConfirmedRooms] = useState(0);
  const [allRooms, setAllRooms] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [priceAccommodation, setPriceAccommodation] = useState(0);

  useEffect(() => {
    if (userId) {
      dispatch(fetchBookedRooms(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (bookedRooms !== null) {
      sumConfirmedRooms(bookedRooms);
      sumRooms(bookedRooms);
      discountSum(bookedRooms);
      accommodationPriceSum(bookedRooms);
    }
  }, [bookedRooms, cancelBookingStatus]);

  const BUTTONS_DATA = [
    { name: 'все' },
    { name: 'текущие' },
    { name: 'не подтвержденные' },
    { name: 'подтвержденные' },
  ];

  const [activeName, setActiveName] = useState('все');

  const sumConfirmedRooms = (rooms: BookingRoom[]) => {
    setConfirmedRooms(
      rooms.reduce((acc, value) => (value.bookingStatus ? acc + 1 : acc), 0)
    );
  };

  const sumRooms = (rooms: BookingRoom[]) => {
    setAllRooms(rooms.reduce((acc) => acc + 1, 0));
  };

  const discountSum = (rooms: BookingRoom[]) => {
    setTotalDiscount(rooms.reduce((acc, value) => acc + value.discount, 0));
  };

  const accommodationPriceSum = (rooms: BookingRoom[]) => {
    setPriceAccommodation(
      rooms.reduce((acc, value) => acc + value.totalAmount, 0)
    );
  };

  const handleButtonClick = (name: string) => {
    setActiveName(name);
  };

  const handleSignOutButtonPointerDown = () => {
    dispatch(authActions.signOut());
    navigate(SCREENS.LANDING);
  };

  return (
    <main className="profile">
      {isAuth ? (
        <div className="profile__container">
          <div className="profile__about-user">
            <div className="profile__all-about-user">
              <div className="profile__avatar-user-container">
                <img
                  src={avatar}
                  className="profile__avatar-user"
                  alt="Аватар пользователя"
                />
                <div className="profile__button-edit-img-container">
                  <ButtonEdit />
                </div>
              </div>
              <div className="profile__user-details">
                <div className="profile__user-name-section">
                  <div className="profile__user-name-paragraph">
                    <h3 className="profile__user-name-caption">Имя</h3>
                    <InputEdit
                      value={String(userName)}
                      placeholder="Введите имя"
                    />
                  </div>
                  <div className="profile__user-name-paragraph">
                    <h3 className="profile__user-name-caption">Фамилия</h3>
                    <InputEdit
                      value={String(userSurname)}
                      placeholder="Введите фамилию"
                    />
                  </div>
                </div>
                <div className="profile__all-expenses">
                  <p className="profile__all-expenses-title">
                    Расходы за все время
                  </p>
                  <div className="profile__expenses-container">
                    <span className="profile__expenses-title">Скидка</span>
                    <span className="profile__discount">
                      {moneyFormat.to(totalDiscount)}
                    </span>
                  </div>
                  <div className="profile__expenses-container">
                    <span className="profile__expenses-title">
                      Дополнительные услуги
                    </span>
                    <span className="profile__additional-services">
                      {moneyFormat.to(0)}
                    </span>
                  </div>
                  <div className="profile__expenses-container">
                    <span className="profile__expenses-title">Проживание</span>
                    <span className="profile__accommodation">
                      {moneyFormat.to(priceAccommodation)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__function-container">
              <button
                type="button"
                className={classNames(
                  'profile__settings',
                  'material-icons-outlined'
                )}
              >
                settings
              </button>
              <button
                type="button"
                className={classNames('profile__delete', 'material-icons')}
              >
                delete_outline
              </button>
            </div>
          </div>
          <div className="profile__filter">
            <h3 className="profile__filter-title">Забронированные номера</h3>
            <div className="profile__filter-tabs">
              {BUTTONS_DATA.map((button) => (
                <button
                  type="button"
                  key={button.name}
                  onClick={() => handleButtonClick(button.name)}
                  className={classNames('profile__filter-tab', {
                    'profile__filter-tab_active': button.name === activeName,
                  })}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
          <div className="profile__rooms-container">
            <div className="profile__booking-rooms">
              <BookingRooms />
            </div>
            {bookedRooms !== null && bookedRooms.length > 0 && (
              <div className="profile__confirmed-bookings-container">
                <div className="profile__confirmed-bookings-title">
                  Подтверждено броней
                </div>
                <div className="profile__confirmed-bookings">
                  <span className="profile__confirmed-bookings-number">
                    {confirmedRooms}
                  </span>
                  {' / '}
                  <span className="profile__confirmed-bookings-all">
                    {allRooms}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="profile__button-exit-container">
            <Button
              onPointerDown={handleSignOutButtonPointerDown}
              onClick={handleSignOutButtonPointerDown}
              withBorder
              text="Выйти"
            />
          </div>
        </div>
      ) : (
        <Navigate replace to={SCREENS.SIGN_IN} />
      )}
      <ToastContainer position="top-right" />
    </main>
  );
};

export { Profile };
