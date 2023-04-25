import React, { useEffect, useState } from 'react';
import styles from './AuthorEditPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorEditForm from '../../../components/forms/author/edit/AuthorEditForm';
import api from '../../../core/api/api';
import { AUTHORS_ROUTE } from '../../../core/constants/routes';
import Author from '../../../core/types/author';

const AuthorEditPage = () => {
  const [author, setAuthor] = useState<Author>(null!);
  const { authorId } = useParams();
  const navigate = useNavigate();

  const fetchAuthor = async () => {
    const receivedAuthor = await api.fetchAuthorById(Number(authorId));
    if (receivedAuthor) {
      setAuthor(receivedAuthor);
    } else {
      navigate(`${AUTHORS_ROUTE}`);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <div className={`${styles.authorEditPage} container page`}>
      <h2 className={`pageTitle`}>Edit Author</h2>
      {author && <AuthorEditForm author={author} onSubmit={() => {}} />}
    </div>
  );
};

export default AuthorEditPage;
