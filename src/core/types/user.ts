import Book from './book';

type Roles = 'ROLE_ADMIN' | 'ROLE_USER';

interface User {
  id: number;
  username: string;
  email: string;
  // isVerified: boolean;
  // readBooks: Book[];
  roles: Roles;
}

type AuthData = Pick<User, 'username' | 'email'> & { password: string };
type UserApiResponse = User & { token: string };

export default User;
export type { AuthData, UserApiResponse };
