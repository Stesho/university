import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import { AuthData } from '../../core/types/user';
import Input from '../../components/ui/input/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button/Button';
import { useStore } from '../../context/storeContext';
import { ACCOUNT_ROUTE } from '../../core/constants/routes';

const LoginPage = () => {
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
    await userStore.singIn(user);
    if (userStore.getUser()) {
      navigate(ACCOUNT_ROUTE);
    }
  };

  return (
    <main className={`${styles.loginPage} container`}>
      <div className={styles.login}>
        <h2 className={styles.title}>Login</h2>
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
          <Button onClick={onSubmit}>Sign In</Button>
        </form>
        <div className={styles.create}>
          <span>{"Don't have an account? "}</span>
          <NavLink to="/registration">Create one</NavLink>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
