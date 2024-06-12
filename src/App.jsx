import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesComponent from './Routes'; // Renamed to avoid confusion

function App() {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
