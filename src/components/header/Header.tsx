import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../assets/icons/account-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart-icon.svg';
import { ReactComponent as WishListIcon } from '../../assets/icons/wishlist-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import useScrollDirection from '../../core/hooks/useScrollDirection';
import ActiveLink from '../../core/types/activeLink';
import { useStore } from '../../context/storeContext';
import { observer } from 'mobx-react';

const Header = observer(() => {
  const userStore = useStore('UserStore');

  const setActiveLink = (active: ActiveLink) =>
    active.isActive ? `${styles.activeLink}` : '';

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NavLink to={'/students'} className={setActiveLink}>
              Студенты
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            {userStore.getUser() ? (
              <NavLink to={'/account'} className={setActiveLink}>
                Аккаунт
              </NavLink>
            ) : (
              <NavLink to={'/login'} className={setActiveLink}>
                Войти
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
