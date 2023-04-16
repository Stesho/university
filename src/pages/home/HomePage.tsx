import React, { FC, useEffect } from 'react';
import styles from './HomePage.module.scss';
import { api } from '../../core/api/api';

const HomePage: FC = () => {
  const fetchBooks = async () => {
    const books = await api.fetchBooks();
    console.log(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return <div className={styles.homePage}>Home</div>;
};

export default HomePage;
