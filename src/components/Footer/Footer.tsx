import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { SCREENS } from '../../routes/endpoints';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';

import { FooterNavMenu } from './FooterNavMenu/FooterNavMenu';
import { MENU_LIST } from './constants';
import './Footer.scss';

const Footer: FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__about-company">
            <Link to={SCREENS.LANDING} className="footer__logo-link">
              <Logo />
            </Link>
            <div className="footer__description-container">
              <span className="footer__description">
                Бронирование номеров в лучшем отеле 2019 года по версии
                ассоциации «Отельные взгляды»
              </span>
            </div>
          </div>
          <div className="footer__navigation">
            <FooterNavMenu menuList={MENU_LIST} />
          </div>
          <div className="footer__description">
            <span className="footer__description-title">Подписка</span>
            <p className="footer__description-special-title">
              Получайте специальные предложения и новости сервиса
            </p>
            <form
              className="footer__description-email"
              method="POST"
              action="/mock-address/change-me"
              name="email"
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                isSubscribe
                onChange={(event) => setEmail(event.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="footer__sub-container">
        <div className="footer__sub">
          <p className="footer__sub-copyright">{`Copyright © 
          ${new Date().getFullYear()} Toxin отель. Все права защищены.`}</p>
          <div className="footer__sub-icons">
            <NavLink
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links footer__sub-links_twitter"
            />
            <NavLink
              to="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links footer__sub-links_facebook"
            />
            <NavLink
              to="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links footer__sub-links_instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
