import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <p>Add your dashboard content here.</p>
    </DashboardContainer>
  );
};

export default Dashboard;
