import React, { useState } from 'react';
import styles from './Settings.module.scss';
import Input from '../../../../components/ui/input/Input';
import Button from '../../../../components/ui/button/Button';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section>
      <h2 className={`accountPageTitle`}>Настройки</h2>
      <form className={styles.form}>
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
          placeholder={'Password'}
        />
        <Button onClick={() => {}}>Update</Button>
      </form>
    </section>
  );
};

export default Settings;
