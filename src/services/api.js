import axios from "axios";

const API_KEY = '362234f1f7e3a22a34462c0e9798f39d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const searchedMoviesSorted = response.data.results.sort((a, b) => b.popularity - a.popularity);
  return searchedMoviesSorted;
};
