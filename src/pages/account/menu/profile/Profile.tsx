import React, { useState } from 'react';
import styles from './Profile.module.scss';
import Input from '../../../../components/ui/input/Input';
import Button from '../../../../components/ui/button/Button';

const Profile = () => {
  return (
    <section className={styles.overview}>
      <h2 className={`accountPageTitle`}>Профиль</h2>
    </section>
  );
};

export default Profile;
