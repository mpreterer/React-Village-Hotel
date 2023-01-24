import { memo, useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SCREENS from '../../routes/endpoints';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Logo } from '../Logo/Logo';

import './Header.scss';

const navigationItems = [
  { text: 'о нас', to: SCREENS.MAIN },
  { text: 'услуги', isNested: true, to: '/mock-address/change-me' },
  { text: 'вакансии', to: '/mock-address/change-me' },
  { text: 'новости', to: '/mock-address/change-me' },
  { text: 'соглашения', isNested: true, to: '/mock-address/change-me' },
];

const isAuth = false;
const userName = 'Юлий Цезарь';

const Header = memo(() => {
  const [isBurgerMenuActive, toggleBurgerMenu] = useState(false);

  const handleNavBurgerClick = () => {
    toggleBurgerMenu(!isBurgerMenuActive);
  };

  const handleLinkClick = useCallback(() => {
    toggleBurgerMenu(false);
  }, []);

  const handleWindowResize = () => {
    if (document.body.offsetWidth > 1024) {
      toggleBurgerMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <Link
            onClick={handleLinkClick}
            to={SCREENS.MAIN}
            className="header__logo-link"
          >
            <Logo />
          </Link>
          <nav
            className={classNames('header__nav', {
              header__nav_active: isBurgerMenuActive,
            })}
          >
            <button
              type="button"
              onClick={handleNavBurgerClick}
              className={classNames('header__nav-burger', {
                'header__nav-burger_active': isBurgerMenuActive,
              })}
            >
              <span className="header__nav-burger-line" />
            </button>
            <div className="header__nav-content">
              <ul className="header__nav-list">
                {navigationItems.map((item) => (
                  <li key={item.text} className="header__nav-item">
                    <NavLink
                      onClick={handleLinkClick}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames('header__nav-link', {
                          'header__nav-link_active':
                            isActive && item.to !== '/mock-address/change-me',
                          'header__nav-link_sign_arrow': item.isNested,
                        })
                      }
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {isAuth ? (
                <div className="header__nav-profile">{userName}</div>
              ) : (
                <div className="header__nav-auth-user">
                  <ButtonLink
                    onClick={handleLinkClick}
                    text="войти"
                    href="/mock-address/change-me"
                    withBorder
                    isSmall
                  />
                  <ButtonLink
                    onClick={handleLinkClick}
                    text="зарегистрироваться"
                    href="/mock-address/change-me"
                    isSmall
                  />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export { Header };
