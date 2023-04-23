import React, { useState } from 'react';
import api from '../../core/api/api';
import styles from './RegistrationPage.module.scss';
import User from '../../core/types/user';
import Input from '../../components/ui/input/Input';
import Button from '../../components/ui/button/Button';
import userStore from '../../store/userStore';
import { useStore } from '../../context/storeContext';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userStore = useStore('UserStore');

  const preventDefaultSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  const onSubmit = async () => {
    const user: User = {
      username,
      email,
      password,
    };
    await userStore.signUp(user);
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
