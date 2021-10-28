import axios from "axios";

const API_KEY = "22c199c70cf21c77ac06b5d74d444545";
const language = "en-US";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

//запрос на популярные фильмы
async function getTrandingMovies(page = 1) {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=${language}&page=${page}`
  );
  return await response.data;
}

//запрос фильма по id
export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

//запрос данных по query
export const fetchMovie = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};

//запрос информации о актёрском состав
export const fetchActors = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

//запрос обзоров
export const fetchReviews = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export default getTrandingMovies;
