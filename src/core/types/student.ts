import Section from './section';
import RecordBook from './recordBook';
import User from './user';

interface Student {
  id: number;
  enrollmentDate: Date;
  recordBook: RecordBook;
  group: number;
  user: User;
}

export default Student;
