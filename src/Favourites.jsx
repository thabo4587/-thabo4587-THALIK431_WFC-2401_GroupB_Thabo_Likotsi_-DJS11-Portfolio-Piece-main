import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const [filterOption, setFilterOption] = useState('none');
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (episode, show, season) => {
    const newFavorite = { episode, show, season, dateAdded: new Date() };
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
  };

  const removeFromFavorites = (episodeNumber) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.episode.episode !== episodeNumber)
    );
  };

  const handleRemoveFavorite = (episodeId) => {
    removeFromFavorites(episodeId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Favorites Page</h1>
      {/* Sorting options */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="filterOption" className="mr-2 font-semibold">Sort By:</label>
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
        {favorites.map(({ episode, show, season, dateAdded }) => (
          <div key={episode.episode} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{show}</h3>
            <h4 className="text-sm mb-2">{`Season ${season}, Episode ${episode.episode}: ${episode.title}`}</h4>
            <p className="text-xs mb-2">Added on: {new Date(dateAdded).toLocaleDateString()}</p>
            <audio className="w-full" controls>
              <source src={episode.file} type="audio/mpeg" />
             Playing...
            </audio>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-2"
              onClick={() => handleRemoveFavorite(episode.episode)}
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

export default Favourites;


 