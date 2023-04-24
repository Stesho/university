import React, { useState } from 'react';
import api from '../../core/api/api';
import styles from './RegistrationPage.module.scss';
import User, { AuthData } from '../../core/types/user';
import Input from '../../components/ui/input/Input';
import Button from '../../components/ui/button/Button';
import userStore from '../../store/userStore';
import { useStore } from '../../context/storeContext';
import { ACCOUNT_ROUTE } from '../../core/constants/routes';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userStore = useStore('UserStore');
  const navigate = useNavigate();

  const preventDefaultSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  const onSubmit = async () => {
    const user: AuthData = {
      username,
      email,
      password,
    };
    await userStore.signUp(user);
    if (userStore.getUser()) {
      navigate(ACCOUNT_ROUTE);
    }
  };

  return (
    <main className={`${styles.registrationPage} container`}>
      <div className={styles.registration}>
        <h2 className={styles.title}>Registration</h2>
        <p className={styles.caption}>Please enter your e-mail and password:</p>
        <form className={styles.form} onSubmit={preventDefaultSubmit}>
          <Input
            onChange={setUsername}
            type="text"
            className={styles.input}
            placeholder={'Username'}
          />
          <Input
            onChange={setEmail}
            type="email"
            className={styles.input}
            placeholder={'Email'}
          />
          <Input
            onChange={setPassword}
            type="password"
            className={styles.input}
            placeholder={'Password'}
          />
          <Input
            onChange={setPassword}
            type="password"
            className={styles.input}
            placeholder={'Confirm password'}
          />
          <Button onClick={onSubmit}>Create Account</Button>
        </form>
      </div>
    </main>
  );
};

export default RegistrationPage;
