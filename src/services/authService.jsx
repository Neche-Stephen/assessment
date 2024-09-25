import axios from 'axios';

const API_URL = 'https://dummyjson.com';

// Function to log in the user and return token
export const loginUser = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  console.log("Response is",response)
  return response.data;
};

// Function to fetch authenticated user details
export const fetchAuthenticatedUser = async (token) => {
  const response = await axios.get(`${API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`, // Passing token in headers
    },
  });
  return response.data;
};
