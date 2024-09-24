import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CustomSelect = ({ options, placeholder, prefix = '', defaultOption = '', onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const displayText = prefix
  ? (selectedOption === defaultOption
      ? <><span className={`${styles.prefix}`}>{prefix}</span> <span className={`${styles.default}`}>{defaultOption}</span></>
      : <><span className={`${styles.prefix}`}>{prefix}</span> <span className={`${styles.default}`}>{selectedOption}</span></>)
  :  <span className={`${styles.default}`}>{selectedOption}</span>;

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <div className={styles.selectSelected} onClick={() => setIsOpen(!isOpen)}>
        {displayText}
        <span className={styles.arrowDown}><FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} /></span>
      </div>
      {isOpen && (
        <div className={styles.selectItems}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
