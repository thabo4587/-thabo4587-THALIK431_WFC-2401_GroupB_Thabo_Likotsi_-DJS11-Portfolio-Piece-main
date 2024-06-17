import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes'; // Make sure RoutesComponent is correctly imported
import { PodcastProvider } from './PodCastContext';

// function to add favourites is a prop 
//details page is rendered using context API to ensure data is fetched properly
function App() {
  const addToFavorites = (episode, show, season) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorite = { episode, show, season, dateAdded: new Date() };
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
