import createAddaptedMovie from '../adapters/createAddaptedMovie';
import Movie from '../types/Movie';
import TMDBMovie from '../types/TMDBMovie';

const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';

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
