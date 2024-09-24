
import React from 'react';
import styles from './SearchInput.module.scss';
import PropTypes from 'prop-types';
import IMAGES from "../../assets/dashboard"; 

function SearchInput({ searchValue, onSearchChange, placeholder, bg }) {
  return (
    <div className={`${styles.input_container} relative `}>
      <input 
        onChange={onSearchChange} 
        className={`pl-10 bg-[${bg}] rounded-[10px] py-1 `} 
        placeholder={placeholder || 'Search'} 
        type="search" 
        value={searchValue}
      />
      <img className='absolute top-1 left-2' src={IMAGES.SEARCH_ICON} alt="search-icon" />
    </div>
  );
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchInput;
