import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
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
import { fetchBookedRooms } from '../../store/slices/profile/slice';
import { setRate } from '../../store/slices/room/slice';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import {
  accommodationPriceSum,
  additionalAmountService,
  discountSum,
  sumConfirmedRooms,
} from './helpers';
import './Profile.scss';

const Profile: FC = () => {
  const userId = useSelector(userIdSelect);
  const bookedRooms = useAppSelector(profileSelect);
  const { isAuth, userName, userSurname } = useSelector(authSelect);
  const cancelBookingStatus = useAppSelector(cancelBookingStatusSelect);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const rooms = useSelector(roomsSelect);

  const [confirmedRooms, setConfirmedRooms] = useState(0);
  const [allRooms, setAllRooms] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [priceAccommodation, setPriceAccommodation] = useState(0);
  const [additionalService, setAdditionalService] = useState(0);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [rooms, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchBookedRooms(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    setConfirmedRooms(sumConfirmedRooms(bookedRooms));
    setAllRooms(bookedRooms.length);
    setTotalDiscount(discountSum(bookedRooms));
    setPriceAccommodation(accommodationPriceSum(bookedRooms));
    setAdditionalService(additionalAmountService(bookedRooms));
  }, [bookedRooms, cancelBookingStatus]);

  const BUTTONS_DATA = [
    { name: 'все' },
    { name: 'текущие' },
    { name: 'не подтвержденные' },
    { name: 'подтвержденные' },
  ];

  const [activeName, setActiveName] = useState('все');

  const handleStarIconClick = useCallback(
    (roomNumber: string, rate: number) => {
      if (userId) {
        const sequenceNumber = rooms.findIndex(
          (item) => item.roomNumber === Number(roomNumber)
        );

        const previousRate = Object.entries(
          rooms[sequenceNumber].rates ?? {}
        ).find((item) => item[1].userId === userId);
        const path = previousRate ? previousRate[0] : '';

        dispatch(
          setRate({
            userId,
            roomNumber,
            sequenceNumber,
            rate,
            path,
          })
        );
        dispatch(fetchBookedRooms(userId));
      }
    },
    [dispatch, rooms, userId]
  );

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
                      {moneyFormat.to(additionalService)}
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
              <BookingRooms onClickRate={handleStarIconClick} />
            </div>
            {bookedRooms.length > 0 && (
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
    </main>
  );
};

export { Profile };
