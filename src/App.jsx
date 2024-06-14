import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes'; // Assuming correct import name
import { PodcastProvider } from './PodCastContext';

function App() {
  // Define addToFavorites function here
  const addToFavorites = (newFavorite) => {
    // Implement logic to add to favorites
    console.log('Adding to favorites:', newFavorite);
    // Example of localStorage usage for adding to favorites
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <PodcastProvider>
      <Router>
        <RoutesComponent addToFavorites={addToFavorites} />
      </Router>
    </PodcastProvider>
  );
}

export default App;
