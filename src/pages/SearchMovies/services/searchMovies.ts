import createAddaptedMovieSearchResults from '../adapters/createAddaptedMovieSearchResults';
import { TMDBMovieSearchResults } from '../types/TMBDMovieSearchResults';
import { MovieSearchResults } from '../types/MovieSearchResults';

const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';

async function searchMovies(query: string): Promise<MovieSearchResults> {
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
  const tmdbSearchResults: TMDBMovieSearchResults = await response.json();
  console.log('tmdbSearchResults', tmdbSearchResults);
  return createAddaptedMovieSearchResults(tmdbSearchResults);
}

export default searchMovies;
