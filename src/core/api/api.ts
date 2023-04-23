import {
  AUTHORS_URL,
  BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
} from '../constants/apiConstants';
import User from '../types/user';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import Author from '../types/author';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

interface IApi {
  fetch: <T>(
    method: RequestMethod,
    url: string,
    config: object,
  ) => Promise<any>;
  signUp: (user: User) => Promise<User | null>;
  signIn: (user: User) => Promise<User | null>;
  fetchAuthors: () => Promise<Author[] | null>;
}

class Api implements IApi {
  async fetch<T>(
    method: RequestMethod,
    url: string,
    config: object,
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

  async signUp(user: User): Promise<User | null> {
    return await this.fetch<User>('post', SIGNUP_URL, {
      data: {
        ...user,
      },
    });
  }

  async signIn(user: User): Promise<User | null> {
    return await this.fetch<User>('post', SIGNIN_URL, {
      data: {
        ...user,
      },
    });
  }

  async fetchAuthors(): Promise<Author[] | null> {
    const token = getCookie('token');
    return await this.fetch('get', AUTHORS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new Api();
