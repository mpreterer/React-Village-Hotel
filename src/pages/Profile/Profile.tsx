import { FC, useEffect } from 'react';
import classNames from 'classnames';

import avatar from '../../assets/img/big-default-avatar.jpg';
import { BookingRooms } from '../../components/BookingRooms/BookingRooms';
import { Button } from '../../components/Button/Button';
import { ButtonEdit } from '../../components/ButtonEdit/ButtonEdit';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import { roomsSelect, statusSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import './Profile.scss';

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(roomsSelect);
  const status = useAppSelector(statusSelect);

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [rooms, dispatch]);

  return (
    <main className="profile">
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
                  <InputEdit value="Юлий" placeholder="Введите имя" />
                </div>
                <div className="profile__user-name-paragraph">
                  <h3 className="profile__user-name-caption">Фамилия</h3>
                  <InputEdit value="Цезарь" placeholder="Введите фамилию" />
                </div>
              </div>
              <div className="profile__all-expenses">
                <p className="profile__all-expenses-title">
                  Расходы за все время
                </p>
                <div className="profile__expenses-container">
                  <span className="profile__expenses-title">Скидка</span>
                  <span className="profile__discount">
                    {moneyFormat.to(-32000)}
                  </span>
                </div>
                <div className="profile__expenses-container">
                  <span className="profile__expenses-title">
                    Дополнительные услуги
                  </span>
                  <span className="profile__additional-services">
                    {moneyFormat.to(22600)}
                  </span>
                </div>
                <div className="profile__expenses-container">
                  <span className="profile__expenses-title">Проживание</span>
                  <span className="profile__accommodation">
                    {moneyFormat.to(192600)}
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
        <div className="profile__booking-rooms">
          <BookingRooms rooms={rooms} status={status} />
        </div>
        <div className="profile__button-exit-container">
          <Button withBorder text="Выйти" />
        </div>
      </div>
    </main>
  );
};

export { Profile };
