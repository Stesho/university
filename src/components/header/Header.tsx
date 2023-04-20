import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../assets/icons/account-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart-icon.svg';
import { ReactComponent as WishListIcon } from '../../assets/icons/wishlist-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

type ActiveLink = {
  isActive: boolean;
};

const Header = () => {
  const setActiveLink = (active: ActiveLink) =>
    active.isActive ? `${styles.activeLink}` : '';

  return (
    <header className={styles.header}>
      <div className={`${styles.topPanel} container`}>
        <NavLink to={'/home'} className={styles.logo}>
          <Logo />
        </NavLink>
        <div className={styles.searchBar}>
          <input className={styles.searchInput} placeholder={'Search Books'} />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.menu}>
          <NavLink to={'/login'} className={styles.account}>
            <AccountIcon className={styles.accountIcon} />
            <span className={styles.accountCaption}>Account</span>
          </NavLink>
          <NavLink to={'/cart'} className={styles.cart}>
            <CartIcon className={styles.cartIcon} />
            <span className={styles.cartCaption}>Cart:(0$)</span>
          </NavLink>
          <NavLink to={'/wishlist'} className={styles.wishlist}>
            <WishListIcon className={styles.wishlistIcon} />
            <span className={styles.wishlistCaption}>Wishlist</span>
          </NavLink>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <NavLink to={'/'} className={setActiveLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/books'} className={setActiveLink}>
              Books
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/authors'} className={setActiveLink}>
              Authors
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/genres'} className={setActiveLink}>
              Genres
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/contacts'} className={setActiveLink}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
