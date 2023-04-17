import {
  AUTHORS_URL,
  BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
} from '../constants/apiConstants';
import User from '../types/user';
import axios from 'axios';
import { getCookie } from '../services/cookie';
import Author from '../types/author';

const api = {
  signUp: async (user: User): Promise<User> => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNUP_URL}`, {
        ...user,
      });

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.data;
    } catch (error) {
      throw new Error('Unknown Error');
    }
  },
  signIn: async (user: User) => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNIN_URL}`, {
        ...user,
      });

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.data;
    } catch (error) {
      throw new Error('Unknown Error');
    }
  },
  fetchAuthors: async (): Promise<Author[]> => {
    try {
      const token = getCookie('token');
      const response = await axios.get(`${BASE_URL}${AUTHORS_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.data;
    } catch (error) {
      throw new Error('Unknown Error');
    }
  },
};

export default api;
