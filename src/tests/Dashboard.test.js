import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from '../routes/dashboard/Dashboard';
import { fetchUsers } from '../store/userSlice';

// Mock the fetchUsers action
jest.mock('../store/userSlice', () => ({
  fetchUsers: jest.fn(),
}));

const mockStore = configureStore([]);
let store;

describe('Dashboard Component', () => {
  beforeEach(() => {
    store = mockStore({
      users: { users: [], total: 0, isLoading: false, error: null },
    });
  });

  it('renders the Dashboard and calls fetchUsers on mount', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(screen.getByText(/Hello Evano 👋🏼,/i)).toBeInTheDocument();
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  it('handles search input changes', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(searchInput.value).toBe('John');
  });
});

