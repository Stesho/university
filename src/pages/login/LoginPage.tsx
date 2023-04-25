import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import { AuthData } from '../../core/types/user';
import Input from '../../components/ui/input/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button/Button';
import { useStore } from '../../context/storeContext';
import { ACCOUNT_ROUTE } from '../../core/constants/routes';
import LoginForm from '../../components/forms/login/LoginForm';

const LoginPage = () => {
  const userStore = useStore('UserStore');
  const navigate = useNavigate();

  const onSubmit = async (user: AuthData) => {
    await userStore.singIn(user);
    if (userStore.getUser()) {
      navigate(ACCOUNT_ROUTE);
    }
  };

  return (
    <main className={`${styles.loginPage} container`}>
      <div className={styles.login}>
        <h2 className={styles.title}>Вход</h2>
        <LoginForm onSubmit={onSubmit} />
        <div className={styles.create}>
          <NavLink to="/registration">Зарегистрироваться</NavLink>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
