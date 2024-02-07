// components/Statistics.js
import React from 'react';
import styled from 'styled-components';

const StatisticsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatisticItem = styled.li`
  margin-bottom: 10px;
`;

const Statistics = () => {
  return (
    <StatisticsContainer>
      <Title>Statistics</Title>
      <StatisticsList>
        <StatisticItem>Total Earnings: $239,570,110</StatisticItem>
        <StatisticItem>Purchase: $48,430,039</StatisticItem>
        <StatisticItem>Sales: $10,547,980</StatisticItem>
      </StatisticsList>
    </StatisticsContainer>
  );
};

export default Statistics;
