import { FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import defaultAvatar from '../../assets/img/big-default-avatar.jpg';
import { BookingRooms } from '../../components/BookingRooms/BookingRooms';
import { Button } from '../../components/Button/Button';
import { ChangePasswordForm } from '../../components/ChangePasswordForm/ChangePasswordForm';
import { DeleteAccountForm } from '../../components/DeleteAccountForm/DeleteAccountForm';
import { InputEdit } from '../../components/InputEdit/InputEdit';
import { Loader } from '../../components/Loader/Loader';
import { Modal } from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setPromiseAlert, updatePromiseAlert } from '../../libs/toastify';
import { SCREENS } from '../../routes/endpoints';
import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';
import {
  changeProfilePictureErrorMessageSelect,
  changeProfilePictureStatusSelect,
  changeUserNameErrorMessageSelect,
  changeUserNameStatusSelect,
  profilePictureUrlSelect,
  userNameSelect,
  userSurnameSelect,
} from '../../store/slices/auth/selectors';
import {
  authActions,
  updateProfilePicture,
  updateUserName,
} from '../../store/slices/auth/slice';
import { roomsSelect, statusSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import {
  CHANGE_PROFILE_NAME_ID,
  CHANGE_PROFILE_PICTURE_ID,
  validFileTypes,
} from './constants';
import './Profile.scss';

const Profile: FC = () => {
  const rooms = useAppSelector(roomsSelect);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(statusSelect);
  const profilePictureUrl = useAppSelector(profilePictureUrlSelect);
  const changeProfilePictureStatus = useAppSelector(
    changeProfilePictureStatusSelect
  );
  const changeProfilePictureErrorMessage = useAppSelector(
    changeProfilePictureErrorMessageSelect
  );
  const userName = useAppSelector(userNameSelect);
  const userSurname = useAppSelector(userSurnameSelect);
  const changeUserNameStatus = useAppSelector(changeUserNameStatusSelect);
  const changeUserNameErrorMessage = useAppSelector(
    changeUserNameErrorMessageSelect
  );

  const [currentModalName, setCurrentModalName] = useState<
    null | 'delete' | 'change'
  >(null);

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [rooms, dispatch]);

  const BUTTONS_DATA = [
    { name: 'все' },
    { name: 'текущие' },
    { name: 'не подтвержденные' },
    { name: 'подтвержденные' },
  ];

  const [activeName, setActiveName] = useState('все');

  const handleButtonClick = (name: string) => {
    setActiveName(name);
  };

  const handleSignOutButtonPointerDown = () => {
    dispatch(authActions.signOut());
    navigate(SCREENS.LANDING);
  };

  const handleEditPhotoInputChange = ({
    currentTarget,
  }: FormEvent<HTMLInputElement>) => {
    const { files } = currentTarget;
    const file = files ? files[0] : null;
    if (file) {
      dispatch(updateProfilePicture(file));
    }
  };

  const handleEditNameInputChange = (text: string) => {
    dispatch(updateUserName({ name: text }));
  };

  const handleEditSurnameInputChange = (text: string) => {
    dispatch(updateUserName({ surname: text }));
  };

  useEffect(() => {
    if (changeProfilePictureStatus === 'loading') {
      setPromiseAlert(
        CHANGE_PROFILE_PICTURE_ID,
        'Подождите идёт загрузка фотографии '
      );
    } else if (changeProfilePictureStatus === 'resolved') {
      updatePromiseAlert(
        CHANGE_PROFILE_PICTURE_ID,
        'success',
        'Фото успешно изменено'
      );
    } else if (changeProfilePictureStatus === 'rejected') {
      const errorMessage =
        typeof changeProfilePictureErrorMessage === 'string'
          ? changeProfilePictureErrorMessage
          : 'Произошла неизвестная ошибка';
      if (errorMessage)
        updatePromiseAlert(CHANGE_PROFILE_PICTURE_ID, 'error', errorMessage);
    }
  }, [changeProfilePictureStatus, dispatch, changeProfilePictureErrorMessage]);

  useEffect(() => {
    if (changeUserNameStatus === 'loading') {
      setPromiseAlert(CHANGE_PROFILE_NAME_ID, 'Происходит изменение имени...');
    } else if (changeUserNameStatus === 'rejected') {
      const errorMessage =
        typeof changeUserNameErrorMessage === 'string'
          ? changeUserNameErrorMessage
          : changeUserNameErrorMessage?.message;

      if (errorMessage)
        updatePromiseAlert(CHANGE_PROFILE_NAME_ID, 'error', errorMessage);
    } else if (changeUserNameStatus === 'resolved') {
      updatePromiseAlert(
        CHANGE_PROFILE_NAME_ID,
        'success',
        'Имя успешно изменено'
      );
    }
  }, [changeUserNameStatus, changeUserNameErrorMessage]);

  return (
    <main className="profile">
      <div className="profile__container">
        <div className="profile__about-user">
          <div className="profile__all-about-user">
            <div className="profile__avatar-user-container">
              <img
                src={profilePictureUrl || defaultAvatar}
                className="profile__avatar-user"
                alt="Аватар пользователя"
              />
              <label className="profile__avatar-edit-label">
                <input
                  disabled={changeProfilePictureStatus === 'loading'}
                  onChange={handleEditPhotoInputChange}
                  className="profile__avatar-edit-input"
                  type="file"
                  accept={validFileTypes.join(', ')}
                />
                <span className="material-icons-outlined">edit</span>
              </label>
            </div>
            <div className="profile__user-details">
              <div className="profile__user-name-section">
                <div className="profile__user-name-paragraph">
                  <h3 className="profile__user-name-caption">Имя</h3>
                  {userName && (
                    <InputEdit
                      value={userName}
                      status={changeUserNameStatus}
                      placeholder="Введите имя"
                      onChange={handleEditNameInputChange}
                    />
                  )}
                </div>
                <div className="profile__user-name-paragraph">
                  <h3 className="profile__user-name-caption">Фамилия</h3>
                  {userSurname && (
                    <InputEdit
                      value={userSurname}
                      status={changeUserNameStatus}
                      placeholder="Введите фамилию"
                      onChange={handleEditSurnameInputChange}
                    />
                  )}
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
              onClick={() => {
                setCurrentModalName('change');
              }}
            >
              settings
            </button>
            <button
              type="button"
              className={classNames('profile__delete', 'material-icons')}
              onClick={() => {
                setCurrentModalName('delete');
              }}
            >
              delete_outline
            </button>
            <Modal
              isActive={!!currentModalName}
              onClickClose={() => setCurrentModalName(null)}
            >
              {currentModalName === 'delete' ? (
                <DeleteAccountForm />
              ) : (
                <ChangePasswordForm />
              )}
            </Modal>
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
          {status === 'loading' && (
            <div className="profile__loader">
              <Loader />
            </div>
          )}
          {status === 'rejected' && (
            <div className="profile__error-message">
              произошла ошибка, повторите попытку позже
            </div>
          )}
          {status === 'resolved' && (
            <>
              <div className="profile__booking-rooms">
                <BookingRooms />
              </div>
              <div className="profile__confirmed-bookings-container">
                <div className="profile__confirmed-bookings-title">
                  Подтверждено броней
                </div>
                <div className="profile__confirmed-bookings">
                  <span className="profile__confirmed-bookings-number">7</span>
                  {' / '}
                  <span className="profile__confirmed-bookings-all">8</span>
                </div>
              </div>
            </>
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
    </main>
  );
};

export { Profile };
