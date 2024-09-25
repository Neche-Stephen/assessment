
# Frontend Developer Assessment

A React-based application that implements a login page and dashboard for displaying user data fetched from an external API. The project uses Redux for state management, Axios for API requests, and React Router for navigation. Unit testing is implemented using Jest and React Testing Library.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [Testing](#testing)
9. [Performance Optimization](#performance-optimization)
10. [Folder Structure](#folder-structure)
11. [Contributing](#contributing)
12. [License](#license)

## Features

- **Login Functionality:** Users can log in using their credentials.
- **User Dashboard:** Displays user data in a tabular format, including name, company, email, country, and status.
- **State Management:** Redux is used to manage authentication and user data.
- **Responsive Design:** The application is mobile-friendly.
- **API Integration:** Uses Axios to fetch data from a dummy JSON API.
- **Unit Testing:** Implemented using Jest and React Testing Library for button click events and other UI elements.

## Technologies Used

- **React** - Frontend library for building UI components.
- **Redux** - State management tool.
- **React Router** - For navigation between the login and dashboard screens.
- **Axios** - HTTP client for API integration.
- **Jest** - JavaScript testing framework.
- **CSS/SCSS** - Styling for components.
- **HTML5** - Structure of the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Neche-Stephen/assessment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd assessment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:3000`.

## Usage

Here's the modified **Login** section of your README:

---

### Login

1. Open the app on `http://localhost:5173/`.
2. Use the following default credentials to log in:
   - **Username**: `emilys`
   - **Password**: `emilyspass`
3. Upon successful login, you will be redirected to the dashboard.

---


### Dashboard

1. The dashboard displays user data fetched from the `dummyjson` API.
2. The data includes the user's name, company, email, country.

## API Integration

This project integrates with the [dummyjson](https://dummyjson.com) API to fetch user data and handle authentication.

- **Login API**: The app sends a POST request to `https://dummyjson.com/auth/login` with the user's email and password.
  
- **Users API**: The app fetches user data from `https://dummyjson.com/users` to display in the dashboard.

API calls are handled using Axios in `src/services/authService.js` and `src/services/userService.js`.

## State Management

State management is implemented using **Redux Toolkit**. 

- The `userSlice.js` file stores user data in the global state.
- You can find the Redux store setup in `src/store/store.js`.


## Routing

- The app uses **React Router** for navigation.
- Routes are defined in `App.js` and include:
  - `/`: Login Page.
  - `/dashboard`: User Dashboard.

## Testing

Unit tests are written using **Jest**.

### Run Tests

To run the test suite, use the following command:

```bash
npm test
```

## Performance Optimization

- **Lazy Loading**: The `LoginPage` and `DashboardPage` components are lazily loaded to improve performance by splitting the bundle.
- **Code Splitting**: Implemented using React’s `Suspense` and `lazy`.

## Folder Structure

The project is organized into the following structure:

```bash
/src
  /components        # Reusable components like Input, AuthButton, and UserTable.
  /routes            # Login and Dashboard pages.
  /store             # Redux slices and store configuration.
  /services          # API service files for authentication and fetching users.
  App.js             # Main application component with routing.
  index.js           # Entry point of the application.
  README.md          # Project documentation.
```
