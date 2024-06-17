// PodcastContext.js
import React, { createContext, useState, useContext } from 'react';

const PodcastContext = createContext();

export const usePodcast = () => useContext(PodcastContext);

//state variable for details page
export const PodcastProvider = ({ children }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
// implementing context
  return (
    <PodcastContext.Provider value={{ selectedPodcast, setSelectedPodcast }}>
      {children}
    </PodcastContext.Provider>
  );
};
