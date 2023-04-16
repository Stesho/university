import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../assets/icons/account-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart-icon.svg';
import { ReactComponent as WishListIcon } from '../../assets/icons/wishlist-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.topPanel}>
        <div className={styles.userIcon}></div>
        <div className={styles.searchBar}>
          <input className={styles.searchInput} placeholder={'Search Books'} />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.menu}>
          <NavLink to={'/account'} className={styles.account}>
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
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/about'}>About us</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/books'}>Books</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/releases'}>New releases</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={'/contacts'}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
