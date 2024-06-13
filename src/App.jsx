import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesComponent from './Routes'; // Renamed to avoid confusion
import { PodcastProvider } from './PodCastContext';




function App() {
  return (
    <PodcastProvider>
  <Router>
      <RoutesComponent />
    </Router>
    </PodcastProvider>
  );
}

export default App;
