// components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search..." />
    </SearchContainer>
  );
};

export default SearchBar;
