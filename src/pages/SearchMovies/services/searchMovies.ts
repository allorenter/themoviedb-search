import createAddaptedMoviesSearch from '../adapters/createAddaptedMoviesSearch';
import TMDBMoviesSearch from '../types/TMDBMoviesSearch';
import MoviesSearch from '../types/MoviesSearch';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function searchMovies(query: string, page: number): Promise<MoviesSearch> {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
    language: 'es',
    page: page.toString(),
  });
  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const tmdbMoviesSearch: TMDBMoviesSearch = await response.json();
  return createAddaptedMoviesSearch(tmdbMoviesSearch);
}

export default searchMovies;
