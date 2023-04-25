import Student from './student';

type Roles = 'Student' | 'Teacher';

interface User {
  id: number;
  username: string;
  email: string;
  photoName: string;
  // lecturer: Lecturer;
  // roles: Roles[];
  // student: Student;
}

type AuthData = Pick<User, 'username' | 'email'> & { password: string };
type UserApiResponse = User & { token: string };

export default User;
export type { AuthData, UserApiResponse };
