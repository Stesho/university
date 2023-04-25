import React, { useEffect, useState } from 'react';
import styles from './StudentsTablePage.module.scss';
import StudentTable from '../../../components/tables/students/StudentTable';
import Student from '../../../core/types/student';
import api from '../../../core/api/api';

const StudentsTablePage = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async () => {
    const response = await api.fetchStudents();
    console.log(response);
    if (response) {
      setStudents(response);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className={`${styles.studentsTablePage} container page`}>
      <StudentTable students={students} />
    </div>
  );
};

export default StudentsTablePage;
