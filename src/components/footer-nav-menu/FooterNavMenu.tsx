import { FC } from 'react';

import './footer-nav-menu.scss';

type FooterLinks = { title: string; href: string };
type MenuList = { title: string; links: FooterLinks[] };
interface IFooterNavMenu {
  menuList: MenuList[];
}

const FooterNavMenu: FC<IFooterNavMenu> = function FooterNavMenu({ menuList }) {
  return (
    <div className="footer-nav-menu">
      {menuList.map((el: MenuList) => (
        <div className="footer-nav-menu__blocks" key={el.title}>
          <span className="footer-nav-menu__title-list">{el.title}</span>
          <ul className="footer-nav-menu__list">
            {el.links.map((link: FooterLinks) => (
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
