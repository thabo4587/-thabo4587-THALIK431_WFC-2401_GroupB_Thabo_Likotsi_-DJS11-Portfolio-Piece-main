import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


//figure out how the data is passed it is using props in showdetail in order to fetch correctly use Useparams and ensure Id is each detail page
//so figure out router and fix this!
export const ShowDetail = ({ id }) => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const [userPreferences, setUserPreferences] = useState({
    lastListenedShow: null,
    lastListenedEpisode: null,
    lastListenedTimestamp: 0,
  });

  const audioRef = useRef(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching show details: ${response.status}`);
        }
        const responseData = await response.json();
        setShowDetails(responseData);
        setLoading(false);

        // Load user preferences saved on local storage
        const storedUserPreferences = JSON.parse(localStorage.getItem("userPreferences")) || {};
        if (
          storedUserPreferences.lastListenedShow === responseData.title &&
          storedUserPreferences.lastListenedEpisode
        ) {
          setSelectedSeason(storedUserPreferences.lastListenedEpisode.season);
          setAudioProgress(parseFloat(storedUserPreferences.lastListenedTimestamp) || 0);
        }
      } catch (fetchError) {
        console.error("Fetch error:", fetchError);
        setError("Error fetching show details. Please try again later.");
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  // Event handlers and helper functions

  const handleBackClick = () => {
    // Define your back click logic here
  };

  const handleResetProgress = () => {
    // Define your reset progress logic here
  };

  //options dropdown
  const handleSeasonSelect = (event) => {
    setSelectedSeason(event.target.value);
  };

 
  return (
    <>
      <div className="fixed-buttons">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded" onClick={handleBackClick}>
          Back to Home
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded" onClick={handleResetProgress}>
          Reset All Listening History
        </button>
      </div>
      <div className="show-detail-container">
        {loading && <p>Loading...</p>}
        {showDetails && (
          <div className="show-details">
            <img src={showDetails.image} alt={showDetails.title} className="detail-image" />
            <div className="detail-info">
              <h1 className="text-3xl font-bold">{showDetails.title}</h1>
              <p className="text-gray-700">{showDetails.description}</p>

              <div className="season-selection">
                <label htmlFor="seasonSelect" className="font-bold text-gray-800">
                  Season:
                </label>
                <select
                  id="seasonSelect"
                  onChange={handleSeasonSelect}
                  value={selectedSeason || ""}
                  className="border border-gray-300 rounded p-1"
                >
                  <option value="" disabled>
                    Select a season
                  </option>
                  {showDetails.seasons.map((season) => (
                    <option key={season.season} value={season.season}>
                      {season.season}
                    </option>
                  ))}
                </select>
              </div>

              {selectedSeason && (
                <div className="selected-season-info">
                  {showDetails.seasons
                    .find((season) => season.season.toString() === selectedSeason)
                    ?.episodes?.map((episode) => (
                      <div key={episode.episode} className="episode-card">
                        <h4>{`Episode ${episode.episode}: ${episode.title}`}</h4>
                        <p>{episode.description}</p>
                     
                     
                    
                        <audio
                          ref={audioRef}
                          controls
                          src={episode.file}
                          onPlay={() => handleAudioPlay(episode)}
                          onPause={handleAudioPause}
                          onTimeUpdate={handleAudioTimeUpdate}
                          data-episode={episode.episode}
                        >
                          <source src={episode.file} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>


                        <p>Current Progress: {audioProgress.toFixed(2)} seconds</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
        {!showDetails && <p>{error || "No show details available."}</p>}
      </div>
    </>
  );
};

export default ShowDetail;
