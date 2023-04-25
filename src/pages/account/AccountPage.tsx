import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './AccountPage.module.scss';
import ActiveLink from '../../core/types/activeLink';
import { useStore } from '../../context/storeContext';

const AccountPage = () => {
  const userStore = useStore('UserStore');

  const setActiveLink = (active: ActiveLink) =>
    active.isActive
      ? `${styles.activeLink} ${styles.menuItem}`
      : styles.menuItem;

  const onLogout = async () => {
    await userStore.logout();
  };

  return (
    <div className={`${styles.account} container page`}>
      <ul className={styles.menu}>
        <li>
          <NavLink to={'/account/profile'} className={setActiveLink}>
            <span>Профиль</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/account/marks'} className={setActiveLink}>
            <span>Оценки</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/account/link'} className={setActiveLink}>
            <span>Учеба</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/account/settings'} className={setActiveLink}>
            <span>Настройки</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} onClick={onLogout} className={setActiveLink}>
            <span>Выход</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
