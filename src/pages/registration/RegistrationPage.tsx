import React, { useState } from 'react';
import styles from './RegistrationPage.module.scss';
import User, { AuthData } from '../../core/types/user';
import { useStore } from '../../context/storeContext';
import { ACCOUNT_ROUTE } from '../../core/constants/routes';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/forms/registration/RegistrationForm';

const RegistrationPage = () => {
  const userStore = useStore('UserStore');
  const navigate = useNavigate();

  const onSubmit = async (user: AuthData) => {
    await userStore.signUp(user);
    if (userStore.getUser()) {
      navigate(ACCOUNT_ROUTE);
    }
  };

  return (
    <main className={`${styles.registrationPage} container`}>
      <div className={styles.registration}>
        <h2 className={styles.title}>Регистрация</h2>
        <p className={styles.caption}>Заполните поля ниже для регистрации:</p>
        <RegistrationForm onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default RegistrationPage;
