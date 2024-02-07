import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
