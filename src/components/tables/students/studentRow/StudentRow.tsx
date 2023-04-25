import React from 'react';
import styles from './StudentRow.module.scss';
import Student from '../../../../core/types/student';

interface StudentRowProps {
  student: Student;
}

const StudentRow = (props: StudentRowProps) => {
  return (
    <div className={styles.studentRow}>
      <span className={styles.column}>{props.student.id}</span>
      <span className={styles.column}>{props.student.group}</span>
      <span className={styles.column}>{props.student.user.username}</span>
      <span className={styles.column}>{props.student.user.email}</span>
    </div>
  );
};

export default StudentRow;
