import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams();

  console.log("ID from useParams:", id);

  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [audioProgress, setAudioProgress] = useState(0);

  const audioRef = useRef(null); // Ref to access the audio element 10716

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/id/10716')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching show details: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setShowDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const handleResetProgress = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Resets audio playback to the beginning
      setAudioProgress(0); // Resets progress state
      setIsPlaying(false); // Pauses audio playback
    }
  };

  const handleSeasonSelect = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    setAudioProgress(currentTime);
  };

  return (
    <>
  <div className="flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded" onClick={handleBackClick}>
      Back to Home
    </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded" onClick={handleResetProgress}>
      Reset All Listening History
    </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded" onClick={handleResetProgress}>
     Favourites
    </button>
  </div>

  <div className="max-w-4xl mx-auto">
    {loading && <p>Loading...</p>}
    {showDetails && (
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={showDetails.image} alt={showDetails.title} className="detail-image w-full h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{showDetails.title}</h1>
        
          <p className="text-gray-700 mb-4">{showDetails.description}</p>

          <div className="mb-4">
            <label htmlFor="season" className="font-bold text-gray-800">
              Season:
            </label>
            <select
              id="season"
              onChange={handleSeasonSelect}
              value={selectedSeason || ""}
              className="border border-gray-300 rounded p-1 ml-2"
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
            <div className="mb-4">
              {showDetails.seasons
                .find((season) => season.season.toString() === selectedSeason)
                ?.episodes?.map((episode) => (
                  <div key={episode.episode} className="mb-4">
                    <h4 className="text-blue-700">{`Episode ${episode.episode}: ${episode.title}`}</h4>
                    <p>{episode.description}</p>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-6 mx-2 rounded-full" onClick={handleResetProgress}>
     Add to Favourites
    </button> 
                    <audio
                      ref={audioRef}
                      controls
                      src={episode.file}
                      onPlay={() => handleAudioPlay(episode)}
                      onPause={handleAudioPause}
                      onTimeUpdate={handleAudioTimeUpdate}
                      data-episode={episode.episode}
                      className="mt-2"
                    >
                      <source src={episode.file} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>

                    <p className="text-gray-700">Current Progress: {audioProgress.toFixed(2)} seconds</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    )}
    {!showDetails && <p className="text-red-600">{error || "No show details available."}</p>}
  </div>
</>

  );
};

export default ShowDetail;
