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

const api = {
  signUp: async (user: User): Promise<User | null> => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNUP_URL}`, {
        ...user,
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
  },
  signIn: async (user: User) => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNIN_URL}`, {
        ...user,
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
  },
  fetchAuthors: async (): Promise<Author[] | null> => {
    try {
      const token = getCookie('token');
      const response = await axios.get(`${BASE_URL}${AUTHORS_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  },
};

export default api;
