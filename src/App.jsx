import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes'; // Make sure RoutesComponent is correctly imported
import { PodcastProvider } from './PodCastContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// function to add to favourites is used as a prop 
// details page is rendered using context API to ensure data is fetched properly
function App() {
  const addToFavorites = (episode, show, season) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorite = { episode, show, season, dateAdded: new Date() };
    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
   
  };


  // the route component encapsulates all other routes.
  return (
    <PodcastProvider>
      <Router>
        <RoutesComponent addToFavorites={addToFavorites} />
      </Router>
    </PodcastProvider>
  );
}

export default App;
