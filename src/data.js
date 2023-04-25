import Student from './core/types/student';
import Section from './core/types/section';
import RecordBook from './core/types/recordBook';
import User from './core/types/user';

export const testUser = {
  id: 1,
  username: 'username',
  email: 'email',
  photoName: 'photo_name',
  token: 'token',
};

export const testStudents = [
  {
    id: 2,
    enrollmentDate: new Date(2020, 5, 12),
    group: 172201,
    recordBook: {
      id: 2,
      number: 512324,
      examMarks: [
        {
          id: 1,
          mark: 3,
        },
        {
          id: 1,
          mark: 4,
        },
        {
          id: 1,
          mark: 9,
        },
        {
          id: 1,
          mark: 9,
        },
        {
          id: 1,
          mark: 5,
        },
      ],
    },
    user: {
      id: 2,
      username: 'username',
      email: 'email',
      photoName: 'photo',
      // roles: ['Student'],
    },
  },
  {
    id: 3,
    enrollmentDate: new Date(2021, 6, 14),
    group: 456879,
    recordBook: {
      id: 3,
      number: 657684,
      examMarks: [
        {
          id: 1,
          mark: 10,
        },
        {
          id: 1,
          mark: 6,
        },
      ],
    },
    user: {
      id: 1,
      username: 'username',
      email: 'email',
      photoName: 'photo',
      // lecturer: Lecturer;
      // roles: ['Student'],
    },
  },
  {
    id: 4,
    enrollmentDate: new Date(2021, 6, 14),
    group: 456879,
    recordBook: {
      id: 3,
      number: 657684,
      examMarks: [
        {
          id: 1,
          mark: 10,
        },
        {
          id: 1,
          mark: 6,
        },
      ],
    },
    user: {
      id: 1,
      username: 'username',
      email: 'email',
      photoName: 'photo',
      // lecturer: Lecturer;
      // roles: ['Student'],
    },
  },
];
