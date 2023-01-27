import { FC } from 'react';
import { Link } from 'react-router-dom';

import SCREENS from '../../routes/endpoints';
import { FooterNavMenu } from '../FooterNavMenu/FooterNavMenu';
import { Logo } from '../Logo/Logo';

import { menuList, contentFooter } from './constants';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__about-company">
            <Link to={SCREENS.MAIN} className="footer__logo-link">
              <Logo />
            </Link>
            <div className="footer__description-container">
              <span className="footer__description">{contentFooter.desc}</span>
            </div>
          </div>
          <div className="footer__navigation">
            <FooterNavMenu menuList={menuList} />
          </div>
          <div className="footer__description">
            <span className="footer__description-title">Подписка</span>
            <p className="footer__description-special-title">
              {contentFooter.specialTitle}
            </p>
            <div className="footer__description-email" />
            <input type="text" placeholder="временный email-input" />
          </div>
        </div>
      </div>
      <div className="footer__sub-container">
        <div className="footer__sub">
          <p className="footer__sub-copyright">{contentFooter.copyright}</p>
          <div className="footer__sub-icons">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links"
            >
              <div className="footer__icon-twitter" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links"
            >
              <div className="footer__icon-facebook" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__sub-links"
            >
              <div className="footer__icon-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
