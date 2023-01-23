import { FC } from 'react';

const FooterNavMenu: FC = function FooterNavMenu() {
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
    <div className="footer-nav-menu">
      {menuList.map((el) => (
        <div className="footer-nav-menu__blocks" key={el.title}>
          <span className="footer-nav-menu__title-list">{el.title}</span>
          <ul className="footer-nav-menu__list">
            {el.links.map((link) => (
              <li className="footer-nav-menu__item" key={link.title}>
                <a href={link.href} className="footer-nav-menu__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavMenu;
