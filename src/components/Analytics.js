// components/Analytics.js
import React from 'react';
import styled from 'styled-components';

const AnalyticsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Analytics = () => {
  return (
    <AnalyticsContainer>
      <Title>Analytics</Title>
    
    </AnalyticsContainer>
  );
};

export default Analytics;
