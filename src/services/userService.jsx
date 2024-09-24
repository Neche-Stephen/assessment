import axios from 'axios';

// export const getUsers = async () => {
//   const response = await axios.get('https://dummyjson.com/users');
//   return response.data;
// };

// services/userService.js
export const getUsers = async (limit = 10, skip = 0, search = '', sortBy = 'firstName', sortOrder = 'asc', tableSearch) => {
  if (tableSearch) {
    search = tableSearch;
  }
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${search}&sortBy=${sortBy}&order=${sortOrder}&limit=${limit}&skip=${skip}`
    // `https://dummyjson.com/users/search?q=${search}&sort=lastName&order=${sortOrder}&limit=${limit}&skip=${skip}`
    
  );
  const data = await response.json();
  console.log(data);
  return data;
};
