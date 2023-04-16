import { SERVER_URL } from '../constants/apiConstants';

export const api = {
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
};
