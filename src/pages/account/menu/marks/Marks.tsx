import React from 'react';
import styles from './Marks.module.scss';
import MarksTable from '../../../../components/tables/marks/MarksTable';

const Marks = () => {
  return (
    <div className={styles.marks}>
      <h2 className={`${styles.title} accountPageTitle`}>Оценки</h2>
    </div>
  );
};

export default Marks;
