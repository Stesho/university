import React from 'react';
import styles from './AuthorCard.module.scss';
import Author from '../../../core/types/author';
import cutStringToLength from '../../../core/utils/cutStringToLength';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = (props: AuthorCardProps) => {
  const textLen = 270;

  return (
    <div className={styles.authorCard}>
      <div className={styles.image}>
        <img src={props.author.image} alt="" />
      </div>
      <div className={styles.text}>
        <h3
          className={styles.name}
        >{`${props.author.name} ${props.author.surname}`}</h3>
        <p className={styles.bio}>
          {cutStringToLength(props.author.biography, textLen)}...
          <span className={styles.viewMore}>View more</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
