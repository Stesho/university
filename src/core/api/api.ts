import { BASE_URL, SIGNIN_URL, SIGNUP_URL } from '../constants/apiConstants';
import User from '../types/user';
import axios from 'axios';

const api = {
  signUp: async (user: User) => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNUP_URL}`, {
        ...user,
      });

      if (response.status !== 200) {
        return response.statusText;
      }

      return response.data;
    } catch (error) {
      return 'Unknown error';
    }
  },
  signIn: async (user: User) => {
    try {
      const response = await axios.post(`${BASE_URL}${SIGNIN_URL}`, {
        ...user,
      });

      if (response.status !== 200) {
        return response.statusText;
      }

      return response.data;
    } catch (error) {
      return 'Unknown error';
    }
  },
};

export default api;
