'use client';

import styles from './SearchInput.module.css';
import React, { useState } from 'react';
import { SearchIcon } from '@/components';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className={styles.container}>
      <span onClick={handleSearch} className={styles.icon}>
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="SEARCH A CHARACTER..."
        value={query}
        onChange={handleInputChange}
        className={styles.input}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
