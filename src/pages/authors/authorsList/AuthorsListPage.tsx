import React, { useEffect, useState } from 'react';
import styles from './AuthorsListPage.module.scss';
import api from '../../../core/api/api';
import AuthorsList from '../../../components/lists/authors/AuthorsList';
import Author from '../../../core/types/author';

const AuthorsListPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const fetchAuthors = async (): Promise<void> => {
    const authors = await api.fetchAuthors();
    if (authors !== null) {
      setAuthors(authors);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <main className={`${styles.authorsPage} container page`}>
      <h2 className={`pageTitle`}>Authors</h2>
      {authors.length > 0 ? (
        <AuthorsList authors={authors} />
      ) : (
        <span className={styles.noAuthors}>Authors not found</span>
      )}
    </main>
  );
};

export default AuthorsListPage;
