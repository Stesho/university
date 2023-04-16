import React, { useState } from 'react';
import api from '../../core/api/api';
import styles from './RegistrationPage.module.scss';
import User from '../../core/types/user';

const RegistrationPage = () => {
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
    const response = await api.signUp(user);
    console.log(response);
  };

  return (
    <main className={`${styles.registrationPage} container`}>
      <form className={styles.form} onSubmit={preventDefaultSubmit}>
        <input
          // value={username}
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
        <button onClick={onSubmit}>Sign up</button>
      </form>
    </main>
  );
};

export default RegistrationPage;
