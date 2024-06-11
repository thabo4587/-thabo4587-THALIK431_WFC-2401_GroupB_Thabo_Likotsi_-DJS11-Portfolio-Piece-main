import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'; // Assuming Routes is in a file named Routes.js

function App() {
  return (
    <Router>
      <Routes /> {/* Render the Routes component */}
    </Router>
  );
}

export default App;
