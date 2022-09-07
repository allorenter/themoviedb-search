import createAddaptedMoviesSearch from '../adapters/createAddaptedMoviesSearch';
import TMDBMoviesSearch from '../types/TMDBMoviesSearch';
import MoviesSearch from '../types/MoviesSearch';

const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';

async function searchMovies(query: string): Promise<MoviesSearch> {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
    language: 'es',
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
