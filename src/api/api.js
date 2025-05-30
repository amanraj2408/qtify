import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

// Generic fetch function for GET requests
const fetchData = async (endpoint) => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}${endpoint}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};

// Get Top Albums
export const fetchTopAlbums = () => fetchData("/albums/top");

// Get New Albums
export const fetchNewAlbums = () => fetchData("/albums/new");

// Get Songs
export const fetchSongs = () => fetchData("/songs");

// Get Filters
export const fetchFilters = () => fetchData("/filters");
