import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SCREENS from '../../routes/endpoints';
import { WindowSizes } from '../../shared/constants/WindowSizes';
import { authSelect } from '../../store/slices/auth/selectors';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Logo } from '../Logo/Logo';

import { navigationItems } from './constants';
import './Header.scss';

const Header: FC = memo(() => {
  const navigationRef = useRef<HTMLDivElement>(null);
  const { isAuth, userName } = useSelector(authSelect);

  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  const handleNavBurgerClick = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  const handleLinkClick = useCallback(() => {
    setIsBurgerMenuActive(false);
  }, []);

  const handleBodyClick = ({ currentTarget, target }: MouseEvent) => {
    if (
      currentTarget instanceof HTMLElement &&
      target instanceof HTMLElement &&
      navigationRef.current !== null
    ) {
      if (
        currentTarget.offsetWidth > WindowSizes.Medium &&
        currentTarget.offsetWidth <= WindowSizes.Large
      ) {
        if (!navigationRef.current.contains(target)) {
          setIsBurgerMenuActive(false);
        }
      }
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const bodyOffsetWidth = document.body.offsetWidth;
      if (bodyOffsetWidth > WindowSizes.Large) {
        setIsBurgerMenuActive(false);
      }
      if (
        document.body.offsetWidth > WindowSizes.Medium &&
        document.body.offsetWidth <= WindowSizes.Large
      ) {
        document.body.addEventListener('click', handleBodyClick);
      } else {
        document.body.removeEventListener('click', handleBodyClick);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (
      document.body.offsetWidth > WindowSizes.Medium &&
      document.body.offsetWidth <= WindowSizes.Large
    ) {
      document.body.addEventListener('click', handleBodyClick);
    }
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
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
            ref={navigationRef}
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
