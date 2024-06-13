import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [previews, setPreviews] = useState([]);
  const [filteredPreviews, setFilteredPreviews] = useState([]);
  const [filterOption, setFilterOption] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreviews(data);
        setFilteredPreviews(data); // Initialize filtered previews with all previews
      });
  }, []);

  useEffect(() => {
    //search filter implementation
    // Filter previews based on search term
    if (searchTerm.trim() === "") {
      setFilteredPreviews(previews); // Reset to all previews if search term is empty
    } else {
      const searchResults = previews.filter(show =>
        show.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPreviews(searchResults);
    }
  }, [searchTerm, previews]);


  //sorting function! this is a utility function in utils.

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
        return previews;
    }
  };

  const handleFavouritesClick = () => {
    navigate('/favorites');
  };

  const handleMoreInfoClick = (showId) => {
    navigate(`/showdetails/${showId}`); // Navigate to the details page for a specific show
  };
// I need to implement genre filter functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search when form is submitted
    // setSearchTerm(searchTerm); // This line isn't necessary as searchTerm is already updated
  };

  return (
    <main className="main-content">
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
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 mx-2 rounded" 
          onClick={handleFavouritesClick}
        >
          Favourites
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
      <input
      type="text"
       value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         placeholder="Search..."
           className="w-full md:w-96 sm:w-80 px-4 py-2 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
       
      </form>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {sortPreviews(filteredPreviews).map((preview) => (
          <div key={preview.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <img className="w-full h-48 object-cover" src={preview.image} alt={preview.title} />
              <h3 className="text-xl font-semibold mt-2">{preview.title}</h3>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 mx-2 rounded" 
                onClick={() => handleMoreInfoClick(preview.id)} // Pass show ID to handler
              >
                More Info
              </button>
              <p className="text-gray-700">Seasons: {preview.seasons}</p>
              <p className="text-gray-700">Genres: {preview.genres.join(', ')}</p>
              <p className="text-gray-700">Last Updated: {new Date(preview.updated).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
