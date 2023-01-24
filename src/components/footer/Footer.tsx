import { FC } from 'react';

import FooterNavMenu from '../footer-nav-menu/FooterNavMenu';
import './footer.scss';

const Footer: FC = function Footer({...props}) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__about-company">
            {/* // +logotype */}
            <div className="footer__description-container" />
            <span className="footer__description">desc</span>
          </div>
          <div className="footer__navigation">
            <FooterNavMenu />
          </div>
          <div className="footer__description">
            <span className="footer__description-title">Подписка</span>
            <p className="footer__description-special-title">specialTitle</p>
            <div className="footer__description-email" />
            {/* +sub-text-input */}
          </div>
        </div>
      </div>
      <div className="footer__sub-container">
        <div className="footer__sub">
          <p className="footer__sub-copyright" />
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

export default Footer;
