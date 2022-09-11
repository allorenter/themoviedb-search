import createAddaptedMovie from '../adapters/createAddaptedMovie';
import Movie from '../types/Movie';
import TMDBMovie from '../types/TMDBMovie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function getMovie(movieId?: string): Promise<Movie> {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'es',
  });
  const url = `https://api.themoviedb.org/3/movie/${movieId}?${params.toString()}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const tmdbMovie: TMDBMovie = await response.json();
  return createAddaptedMovie(tmdbMovie);
}

export default getMovie;
