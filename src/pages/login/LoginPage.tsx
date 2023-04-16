import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import User from '../../core/types/user';
import api from '../../core/api/api';
import { setCookie } from '../../core/services/cookie';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const preventDefaultSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  const onSubmit = async () => {
    const user: User = {
      username,
      email,
      password,
    };
    const response = await api.signIn(user);
    setCookie('token', response.token);
  };

  return (
    <main className={`${styles.loginPage} container`}>
      <form className={styles.form} onSubmit={preventDefaultSubmit}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type={'text'}
          placeholder={'username'}
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type={'text'}
          placeholder={'email'}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type={'text'}
          placeholder={'password'}
        />
        <button onClick={onSubmit}>Sign in</button>
      </form>
    </main>
  );
};

export default LoginPage;
