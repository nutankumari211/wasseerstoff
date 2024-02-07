// components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Wasserstoff</Title>
    </HeaderContainer>
  );
};

export default Header;
