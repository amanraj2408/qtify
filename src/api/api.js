import axios from "axios";

export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

// Get Top Albums
export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    return null;
  }
};

// Get New Albums
export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Get Songs
export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const fetchFilters = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/filters`);
    return res.data;
  } catch (error) {
    return null;
  }
};
