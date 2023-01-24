import { FC } from 'react';

import FooterNavMenu from '../footer-nav-menu/FooterNavMenu';

import './footer.scss';

interface IFooter {
  desc: string;
  specialTitle: string;
}

const Footer: FC<IFooter> = function Footer({ desc, specialTitle }) {
  const menuList = [
    {
      title: 'Навигация',
      links: [
        { title: 'О нас', href: '/mock-address/change-me' },
        { title: 'Новости', href: '/mock-address/change-me' },
        { title: 'Служба поддержки', href: '/mock-address/change-me' },
        { title: 'Услуги', href: '/mock-address/change-me' },
      ],
    },
    {
      title: 'О нас',
      links: [
        { title: 'О сервисе', href: '/mock-address/change-me' },
        { title: 'Наша команда', href: '/mock-address/change-me' },
        { title: 'Вакансии', href: '/mock-address/change-me' },
        { title: 'Инвесторы', href: '/mock-address/change-me' },
      ],
    },
    {
      title: 'Служба поддержки',
      links: [
        { title: 'Соглашения', href: '/mock-address/change-me' },
        { title: 'Сообщества', href: '/mock-address/change-me' },
        { title: 'Связь с нами', href: '/mock-address/change-me' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__about-company">
            {/* // +logotype */}
            <div className="footer__description-container" />
            <span className="footer__description">{desc}</span>
          </div>
          <div className="footer__navigation">
            <FooterNavMenu menuList={menuList} />
          </div>
          <div className="footer__description">
            <span className="footer__description-title">Подписка</span>
            <p className="footer__description-special-title">{specialTitle}</p>
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
