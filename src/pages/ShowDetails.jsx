import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePodcast } from '../PodCastContext';
import PropTypes from 'prop-types';

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

const ShowDetail = ({ addToFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedPodcast } = usePodcast();
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedPodcast && selectedPodcast.id === id) {
      setShowDetails(selectedPodcast);
      setLoading(false);
    } else {
      fetch(`https://podcast-api.netlify.app/id/${id}`)
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
    }
  }, [id, selectedPodcast]);

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

  const handleAddToFavorites = (episode) => {
    addToFavorites(episode, showDetails.title, selectedSeason);
    alert(`Added ${episode.title} to Favorites!`);
  };

  const handleResetProgress = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setAudioProgress(0);
      setIsPlaying(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!showDetails) {
    return <div>No show details available.</div>;
  }

  return (
    <>
      <div className="max-w-8xl mx-auto ml-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={showDetails.image}
              alt={showDetails.title}
              className="detail-image w-full h-auto lg:mb-60 mt-3"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              {showDetails.title}
            </h1>
            <p className="text-gray-700 mb-4">{showDetails.description}</p>
            <div className="mb-4">
              <label htmlFor="season" className="font-bold text-gray-800">
                Season:
              </label>
              <select
                id="season"
                onChange={handleSeasonSelect}
                value={selectedSeason || ''}
                className="border border-gray-300 rounded p-1 ml-2"
              >
                <option value="" disabled>
                  Select a season
                </option>
                {showDetails.seasons.map((season) => (
                  <option key={season.season} value={season.season}>
                    {`Season ${season.season} (${season.episodes.length} episodes)`}
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
                      <audio
                        ref={audioRef}
                        controls
                        src={episode.file}
                        onPlay={handleAudioPlay}
                        onPause={handleAudioPause}
                        onTimeUpdate={handleAudioTimeUpdate}
                        data-episode={episode.episode}
                        className="mt-2"
                      >
                        <source src={episode.file} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <button
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                        onClick={() => handleAddToFavorites(episode)}
                      >
                        Add to Favorites
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-2 ml-2"
                        onClick={handleResetProgress}
                      >
                        Reset Progress
                      </button>
                      <p className="text-gray-700 mt-2">
                        Current Progress: {audioProgress.toFixed(2)} seconds
                      </p>
                    </div>
                  ))}
              </div>
            )}
         
          </div>
        </div>
      </div>
    </>
  );
};

ShowDetail.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
};

export default ShowDetail;
