import React from 'react';
import styles from './StudentTable.module.scss';
import StudentRow from './studentRow/StudentRow';
import Student from '../../../core/types/student';

interface StudentTableProps {
  students: Student[];
}

const StudentTable = (props: StudentTableProps) => {
  return (
    <div className={styles.studentTable}>
      <div className={styles.titles}>
        <span className={styles.title}>id</span>
        <span className={styles.title}>Группа</span>
        <span className={styles.title}>Имя</span>
        <span className={styles.title}>email</span>
      </div>
      {props.students.length !== 0 ? (
        props.students.map((student) => (
          <StudentRow student={student} key={student.id} />
        ))
      ) : (
        <div>There are no students</div>
      )}
    </div>
  );
};

export default StudentTable;
