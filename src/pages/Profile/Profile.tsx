import { FC, useState } from 'react';
import classNames from 'classnames';

import { moneyFormat } from '../../shared/helpers/moneyFormat/moneyFormat';

import logo from './big-avatar.png';
import './Profile.scss';

const Profile: FC = () => {
  const buttonsData = [
    { name: 'все', isActive: true },
    { name: 'текущие', isActive: false },
    { name: 'не подтвержденные', isActive: false },
    { name: 'подтвержденные', isActive: false },
  ];

  const [buttons, setFilterButtons] = useState(buttonsData);

  const handleButtonClick = (index: number) => {
    const updatedButtons = buttons.map((button, id) => {
      if (id === index) {
        return { ...button, isActive: true };
      }
      return { ...button, isActive: false };
    });
    setFilterButtons(updatedButtons);
  };

  return (
    <main className="profile">
      <div className="profile__container">
        <div className="profile__about-user">
          <div className="profile__all-about-user">
            <div className="profile__avatar-user-container">
              <img
                src={logo}
                className="profile__avatar-user"
                alt="Аватар пользователя"
              />
              <div className="profile__button-edit-img-container">
                <div className="profile__button-edit material-icons-outlined">
                  edit
                </div>
              </div>
            </div>
            <div className="profile__user-details">
              <div className="profile__user-name-section">
                <div className="profile__user-name-paragraph">
                  <h3 className="profile__user-name-caption">Имя</h3>
                  <div className="profile__user-name-container">
                    <span className="profile__user-name">Юлий</span>
                    <div className="profile__button-edit-name-container">
                      <div
                        className="
                        profile__button-edit 
                        material-icons-outlined"
                      >
                        edit
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile__user-name-paragraph">
                  <h3 className="profile__user-name-caption">Фамилия</h3>
                  <div className="profile__user-name-container">
                    <span className="profile__user-surname">Цезарь</span>
                    <div className="profile__button-edit-name-container">
                      <div
                        className="
                        profile__button-edit 
                        material-icons-outlined"
                      >
                        edit
                      </div>
                    </div>
                  </div>
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
            <div
              className={classNames(
                'profile__settings',
                'material-icons-outlined'
              )}
            >
              settings
            </div>
            <div className={classNames('profile__delete', 'material-icons')}>
              delete_outline
            </div>
          </div>
        </div>
        <div className="profile__filter">
          <h3 className="profile__filter-title">Забронированные номера</h3>
          <div className="profile__filter-tabs">
            {buttons.map((button, index) => (
              <button
                type="button"
                key={button.name}
                onClick={() => handleButtonClick(index)}
                className={classNames('profile__filter-tab', {
                  'profile__filter-tab_active': button.isActive,
                })}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
        <div className="profile__rooms-container">
          <div className="profile__confirmed-bookings-container">
            <div className="profile__confirmed-bookings-title">
              Подтверждено броней
            </div>
            <div className="profile__confirmed-bookings">
              <span className="profile__confirmed-bookings-number">7</span>
              <span className="profile__confirmed-bookings-separator">
                {' / '}
              </span>
              <span className="profile__confirmed-bookings-all">8</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Profile };
