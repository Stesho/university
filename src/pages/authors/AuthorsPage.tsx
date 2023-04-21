import React, { useEffect, useState } from 'react';
import styles from './AuthorsPage.module.scss';
import api from '../../core/api/api';
import AuthorsList from '../../components/lists/authors/AuthorsList';
import Author from '../../core/types/author';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const fetchAuthors = async (): Promise<void> => {
    const authors = await api.fetchAuthors();
    setAuthors(authors);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <main className={`${styles.authorsPage} container`}>
      <h2 className={styles.title}>Authors</h2>
      {authors.length > 0 ? (
        <AuthorsList authors={authors} />
      ) : (
        <span className={styles.noAuthors}>Authors not found</span>
      )}
    </main>
  );
};

export default AuthorsPage;
