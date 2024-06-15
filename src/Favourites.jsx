import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [filterOption, setFilterOption] = useState('none');
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    console.log('Stored favorites:', storedFavorites); // Debugging statement
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    console.log('Favorites updated:', favorites); // Debugging statement
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (episodeTitle) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.episode.title !== episodeTitle)
    );
    console.log('Removed favorite:', episodeTitle); // Debugging statement
  };

  const handleRemoveFavorite = (episodeTitle) => {
    removeFromFavorites(episodeTitle);
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    switch (filterOption) {
      case 'titleAsc':
        return a.episode.title.localeCompare(b.episode.title);
      case 'titleDesc':
        return b.episode.title.localeCompare(a.episode.title);
      case 'dateAsc':
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      case 'dateDesc':
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Favorites Page</h1>
      {/* Sorting options */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="filterOption" className="mr-2 font-semibold">
            Sort By:
          </label>
          <select
            id="filterOption"
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="none">None</option>
            <option value="titleAsc">Title A-Z</option>
            <option value="titleDesc">Title Z-A</option>
            <option value="dateAsc">Oldest First</option>
            <option value="dateDesc">Newest First</option>
          </select>
        </div>
      </div>
      {/* Favorite episodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedFavorites.map(({ episode, show, season, dateAdded }) => (
          <div key={episode.title} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{show}</h3>
            <h4 className="text-sm mb-2">{`Season ${season}, Episode ${episode.episode}: ${episode.title}`}</h4>
            <p className="text-xs mb-2">Added on: {new Date(dateAdded).toLocaleDateString()}</p>
            <audio className="w-full" controls>
              <source src={episode.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-2"
              onClick={() => handleRemoveFavorite(episode.title)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* Message when no favorites */}
      {favorites.length === 0 && (
        <p className="text-center mt-4">No favorites added yet.</p>
      )}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      episode: PropTypes.shape({
        title: PropTypes.string.isRequired,
        episode: PropTypes.number.isRequired,
        file: PropTypes.string.isRequired,
      }).isRequired,
      show: PropTypes.string.isRequired,
      season: PropTypes.number.isRequired,
      dateAdded: PropTypes.string.isRequired,
    })
  ),
};

export default Favorites;
