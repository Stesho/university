import React from 'react';
import styles from './AuthorCard.module.scss';
import Author from '../../../core/types/author';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = (props: AuthorCardProps) => {
  return (
    <div className={styles.authorCard}>
      <div
        className={styles.name}
      >{`${props.author.name} ${props.author.surname}`}</div>
      <div className={styles.image}>image</div>
      <div className={styles.bio}>{props.author.biography}</div>
    </div>
  );
};

export default AuthorCard;
