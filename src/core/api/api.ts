import {
  AUTHORS_URL,
  BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
} from '../constants/apiConstants';
import User, { AuthData, UserApiResponse } from '../types/user';
import axios from 'axios';
import { getCookie, setCookie } from '../utils/cookie';
import Author from '../types/student';
import { testStudents, testUser } from '../../data';
import Student from '../types/student';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

interface IApi {
  fetch: <T>(
    method: RequestMethod,
    url: string,
    config: object,
  ) => Promise<any>;
  signUp: (user: AuthData) => Promise<UserApiResponse | null>;
  signIn: (user: AuthData) => Promise<UserApiResponse | null>;
  // signIn: (user: User) => Promise<UserApiResponse | null>;
  fetchStudents: () => Promise<Author[] | null>;
  fetchStudentById: (id: number) => Promise<Author | null>;
}

class Api {
  async fetch<T>(
    method: RequestMethod,
    url: string,
    config?: object,
  ): Promise<T | null> {
    try {
      const response = await axios({
        baseURL: `${BASE_URL}`,
        method,
        url,
        ...config,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.toJSON());
      } else {
        console.error(error);
      }
      return null;
    }
  }

  async signUp(user: AuthData): Promise<UserApiResponse | null> {
    return await this.fetch('post', SIGNUP_URL, {
      data: {
        ...user,
      },
    });
  }

  async signIn(user: AuthData): Promise<UserApiResponse | null> {
    // const receivedUser = await this.fetch<UserApiResponse>('post', SIGNIN_URL, {
    //   data: {
    //     ...user,
    //   },
    // });
    // setCookie('token', receivedUser.token);
    // return receivedUser;
    setCookie('token', testUser.token);
    return testUser;
  }

  async fetchStudents(): Promise<Student[] | null> {
    // const token = getCookie('token');
    // return await this.fetch('get', AUTHORS_URL, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    return testStudents;
  }

  async fetchStudentById(id: number): Promise<Student[] | null> {
    // return await this.fetch('get', `${AUTHORS_URL}/${id}`);
    // return students.find((student) => student.id === id);
    return testStudents;
  }
}

export default new Api();
