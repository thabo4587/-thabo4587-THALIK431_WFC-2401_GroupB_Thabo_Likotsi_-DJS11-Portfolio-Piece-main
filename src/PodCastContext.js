// PodcastContext.js
import React, { createContext, useState, useContext } from 'react';

const PodcastContext = createContext();

export const usePodcast = () => useContext(PodcastContext);

export const PodcastProvider = ({ children }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  return (
    <PodcastContext.Provider value={{ selectedPodcast, setSelectedPodcast }}>
      {children}
    </PodcastContext.Provider>
  );
};
