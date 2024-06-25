import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const genreMapping = {
  1: 'Personal Growth',
  2: 'Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family'
};

const HomePage = () => {
  const [previews, setPreviews] = useState([]);
  const [filteredPreviews, setFilteredPreviews] = useState([]);
  const [filterOption, setFilterOption] = useState("titleAsc"); // Default sort by title A-Z
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("none");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Track if audio is playing
  const navigate = useNavigate();

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(true);

  // Fetch data from API
  useEffect(() => {
    setLoading(true);
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        setPreviews(data);
        setFilteredPreviews(data);
        setLoading(false);
        setShowDetails(data.length > 0);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Auto-slide effect for carousel
  useEffect(() => {
    let interval;
    if (isCarouselActive && previews.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % previews.length);
      }, 5000); // Change slide interval as needed (in milliseconds)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCarouselActive, previews.length]);

  // Handle audio play event
  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
  };

  // Handle audio pause event
  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };

  // Handle form submission if needed
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
  };

  // Sort previews based on selected filter option
  const sortPreviews = (previews) => {
    switch (filterOption) {
      case "titleAsc":
        return [...previews].sort((a, b) => a.title.localeCompare(b.title));
      case "titleDesc":
        return [...previews].sort((a, b) => b.title.localeCompare(a.title));
      case "dateAsc":
        return [...previews].sort((a, b) => new Date(a.updated) - new Date(b.updated));
      case "dateDesc":
        return [...previews].sort((a, b) => new Date(b.updated) - new Date(a.updated));
      default:
        return [...previews].sort((a, b) => a.title.localeCompare(b.title)); // Default to titleAsc
    }
  };

  // Filter previews based on search term and selected genre
  useEffect(() => {
    if (searchTerm.trim() === "" && selectedGenre === "none") {
      setFilteredPreviews(previews);
    } else {
      const searchResults = previews.filter(show => {
        const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === "none" || (show.genres && show.genres.includes(parseInt(selectedGenre)));
        return matchesSearch && matchesGenre;
      });
      setFilteredPreviews(searchResults);
    }
  }, [searchTerm, selectedGenre, previews]);

  // Navigate to favorites page
  const handleFavoritesClick = () => {
    if (isAudioPlaying && !window.confirm('Audio is currently playing. Are you sure you want to leave?')) {
      return;
    }
    navigate('/favorites');
  };

  // Navigate to show details page
  const handleMoreInfoClick = (showId) => {
    if (isAudioPlaying && !window.confirm('Audio is currently playing. Are you sure you want to leave?')) {
      return;
    }
    navigate(`/showdetails/${showId}`);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8">Error: {error}</div>;
  }

  if (!showDetails) {
    return <div className="text-center mt-8">No shows available.</div>;
  }

  return (
    <main className="main-content">
      {/* Audio player section */}
      <div className="audio-player bg-blue-500 p-4 shadow-md mb-6">
        <h2 className="text-white text-lg font-semibold mb-2">Currently Playing</h2>
        <audio
          className="w-full bg-blue-500"
          controls
          onPlay={handleAudioPlay}
          onPause={handleAudioPause}
        >
          <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="mt-4 text-white">
        <h3 className="text-xl font-semibold">Something Was Wrong</h3>
      <div className="mt-4">
        <p><span className="font-semibold">Season:</span> 1</p>
        <p><span className="font-semibold">Episode 1:</span> There Were No Red Flags</p>
          </div>
          
          <div className="flex items-center mt-4 space-x-4">
            {/* Seek Backward Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {} /* Handle Seek Backward Action */}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>

            {/* Pause Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => {} /* Handle Pause Action */}
            >
              <rect x="5" y="5" width="4" height="10" />
              <rect x="11" y="5" width="4" height="10" />
            </svg>

            {/* Seek Forward Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {} /* Handle Seek Forward Action */}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sort and filter section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="filterOption" className="mr-2 font-semibold">Sort By:</label>
          <select
            id="filterOption"
            className="px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="titleAsc">Title A-Z</option>
            <option value="titleDesc">Title Z-A</option>
            <option value="dateAsc">Oldest First</option>
            <option value="dateDesc">Newest First</option>
          </select>
        </div>
        <div>
          <label htmlFor="genreFilter" className="mr-2 font-semibold">Filter By Genre:</label>
          <select
            id="genreFilter"
            className="px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="none">All Genres</option>
            {Object.entries(genreMapping).map(([id, title]) => (
              <option key={id} value={id}>{title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      {/* Carousel */}
      <div className="relative mb-6">
        {previews.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full lg:h-auto% md:h-auto sm:h-auto object-cover rounded"
             src={previews[currentIndex].image}
             style={{ maxHeight: '60%'}}
             alt={previews[currentIndex].title} />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mt-2">{previews[currentIndex].title}</h3>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 mx-2 rounded" 
                onClick={() => handleMoreInfoClick(previews[currentIndex].id)}
              >
                More Info
              </button>
              <p className="text-gray-700">Seasons: {previews[currentIndex].seasons}</p>
              <p className="text-gray-700">Genres: {previews[currentIndex].genres && previews[currentIndex].genres.map(id => genreMapping[id]).join(', ')}</p>
              <p className="text-gray-700">Last Updated: {previews[currentIndex].updated ? new Date(previews[currentIndex].updated).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
        )}

        {/* Carousel navigation */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? previews.length - 1 : prevIndex - 1))}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % previews.length)}
        >
          Next
        </button>
      </div>

      {/* List of previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {sortPreviews(filteredPreviews).map((preview) => (
          <div key={preview.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <img className="w-full h-auto md:h-auto sm:h-auto object-cover rounded" src={preview.image} alt={preview.title} />
              <h3 className="text-xl font-semibold mt-2">{preview.title}</h3>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 mx-2 rounded" 
                onClick={() => handleMoreInfoClick(preview.id)}
              >
                More Info
              </button>
              <p className="text-gray-700">Seasons: {preview.seasons}</p>
              <p className="text-gray-700">Genres: {preview.genres && preview.genres.map(id => genreMapping[id]).join(', ')}</p>
              <p className="text-gray-700">Last Updated: {preview.updated ? new Date(preview.updated).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;

