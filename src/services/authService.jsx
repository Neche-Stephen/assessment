import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
