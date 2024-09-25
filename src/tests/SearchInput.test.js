import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from "../components/search-input-field/SearchInput"

describe('SearchInput Component', () => {


  test('calls onSearchChange when input changes', () => {
    const handleSearchChange = jest.fn();
    render(<SearchInput searchValue="" onSearchChange={handleSearchChange} placeholder="Search" />);

    fireEvent.change(screen.getByPlaceholderText(/Search/i), { target: { value: 'test' } });
    expect(handleSearchChange).toHaveBeenCalledTimes(1);
  });
});
