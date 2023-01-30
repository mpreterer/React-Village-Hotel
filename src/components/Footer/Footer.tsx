import { FC } from 'react';
import { Link } from 'react-router-dom';

import SCREENS from '../../routes/endpoints';
import { FooterNavMenu } from '../FooterNavMenu/FooterNavMenu';
import { Logo } from '../Logo/Logo';

import './Footer.scss';

type Props = {
  desc: string;
  specialTitle: string;
  copyright: string;
};

const defaultProps = {
  desc: `Бронирование номеров в лучшем отеле 2019 года 
          по версии ассоциации «Отельные взгляды»`,
  specialTitle: 'Получайте специальные предложения и новости сервиса',
  copyright: 'Copyright © 2018 Toxin отель. Все права защищены.',
};

const Footer: FC<Props> = ({
  desc = defaultProps.desc,
  specialTitle = defaultProps.specialTitle,
  copyright = defaultProps.copyright,
}) => {
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
            <Link to={SCREENS.MAIN} className="footer__logo-link">
              <Logo />
            </Link>
            <div className="footer__description-container">
              <span className="footer__description">{desc}</span>
            </div>
          </div>
          <div className="footer__navigation">
            <FooterNavMenu menuList={menuList} />
          </div>
          <div className="footer__description">
            <span className="footer__description-title">Подписка</span>
            <p className="footer__description-special-title">{specialTitle}</p>
            <div className="footer__description-email" />
            <input type="text" placeholder="временный email-input" />
          </div>
        </div>
      </div>
      <div className="footer__sub-container">
        <div className="footer__sub">
          <p className="footer__sub-copyright">{copyright}</p>
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
