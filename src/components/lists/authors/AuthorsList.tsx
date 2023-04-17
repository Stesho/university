import React from 'react';
import styles from './AuthorsList.module.scss';
import Author from '../../../core/types/author';
import AuthorCard from '../../cards/author/AuthorCard';

interface AuthorsList {
  authors: Author[];
}

const AuthorsList = (props: AuthorsList) => {
  return (
    <ul>
      {props.authors.map((author) => (
        <AuthorCard author={author} key={author.id} />
      ))}
    </ul>
  );
};

export default AuthorsList;
