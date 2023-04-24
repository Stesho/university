import React from 'react';
import styles from './AuthorCard.module.scss';
import Author from '../../../core/types/author';
import cutStringToLength from '../../../core/utils/cutStringToLength';
import { useNavigate } from 'react-router-dom';
import { AUTHORS_ROUTE } from '../../../core/constants/routes';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = (props: AuthorCardProps) => {
  const navigate = useNavigate();
  const textLen = 270;

  return (
    <div className={styles.authorCard}>
      <div className={styles.image}>
        <img src={props.author.image} alt="author" />
      </div>
      <div className={styles.text}>
        <h3
          className={styles.name}
        >{`${props.author.name} ${props.author.surname}`}</h3>
        <p className={styles.bio}>
          {cutStringToLength(props.author.biography, textLen)}...
          <span
            className={styles.viewMore}
            onClick={() => navigate(`${AUTHORS_ROUTE}/${props.author.id}`)}
          >
            View more
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
