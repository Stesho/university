import { SERVER_URL, SIGNUP_URL } from '../constants/apiConstants';
import User from '../types/user';

const api = {
  fetchBooks: async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/test/all`);

      if (!response?.ok) {
        return 'Error';
      }

      return await response.json();
    } catch (error) {
      return 'Error';
    }
  },
  signUp: async (user: User) => {
    try {
      const response = await fetch(`${SERVER_URL}${SIGNUP_URL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response?.ok) {
        return 'Response Error';
      }

      return await response.json();
    } catch (error) {
      return 'Server Error';
    }
  },
};

export default api;
