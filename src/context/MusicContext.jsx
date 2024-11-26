import React, { createContext, useContext, useEffect, useState } from "react";

export const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [popularArtists, setPopularArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPopularArtist = async () => {
    try {
      const response = await fetch('https://api.deezer.com/chart/0/artists');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching popular artists:', error);
    }
  };
  
  

  useEffect(() => {
    fetchPopularArtist();
  }, []);

  return (
    <MusicContext.Provider value={{ popularArtists, loading }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
