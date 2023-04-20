import React, { useState } from 'react';
import api from '../../core/api/api';
import styles from './RegistrationPage.module.scss';
import User from '../../core/types/user';
import Input from '../../components/ui/input/Input';
import { NavLink } from 'react-router-dom';
import Button from '../../components/ui/button/Button';

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
    console.log(user);
    const response = await api.signUp(user);
    console.log(response);
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
