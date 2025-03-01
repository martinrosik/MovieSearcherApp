import axios from "axios";

const API_KEY = '362234f1f7e3a22a34462c0e9798f39d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  return response.data.results;
};
