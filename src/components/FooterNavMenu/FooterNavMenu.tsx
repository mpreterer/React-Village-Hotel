import { FC } from 'react';

import './FooterNavMenu.scss';

type FooterLinks = { title: string; href: string };
type MenuList = { title: string; links: FooterLinks[] };
type Props = {
  menuList: MenuList[];
};

const FooterNavMenu: FC<Props> = ({ menuList }) => {
  return (
    <div className="footer-nav-menu">
      {menuList.map((item: MenuList) => (
        <div className="footer-nav-menu__blocks" key={item.title}>
          <span className="footer-nav-menu__title-list">{item.title}</span>
          <ul className="footer-nav-menu__list">
            {item.links.map((link: FooterLinks) => (
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

export { FooterNavMenu };
