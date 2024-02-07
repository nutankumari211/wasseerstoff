// App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Statistics from './components/Statistics';
import Overview from './components/Overview';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import BarChart from './components/BarChart';
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
      <Statistics />
      <Overview />
      <Dashboard />
      <Analytics />
      <BarChart />
      <Footer />
    </AppContainer>
  );
}

export default App;
