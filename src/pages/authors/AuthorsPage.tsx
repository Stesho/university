import React, { useEffect } from 'react';
import styles from './AuthorsPage.module.scss';
import api from '../../core/api/api';

const AuthorsPage = () => {
  const getAuthors = async () => {
    const response = await api.fetchAuthors();
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return <main className={styles.authorsPage}>Authors</main>;
};

export default AuthorsPage;
