import Movie from '../types/Movie';
import TMDBMovie from '../types/TMDBMovie';

function createAddaptedMovie(tmdbMovie: TMDBMovie): Movie {
  return {
    adult: tmdbMovie.adult,
    backdropPath: tmdbMovie.backdrop_path,
    budget: tmdbMovie.budget,
    genres: tmdbMovie.genres,
    homepage: tmdbMovie.homepage,
    id: tmdbMovie.id,
    imdbId: tmdbMovie.imdb_id,
    originalLanguage: tmdbMovie.original_language,
    originalTitle: tmdbMovie.original_title,
    overview: tmdbMovie.overview,
    popularity: tmdbMovie.popularity,
    posterPath: tmdbMovie.poster_path,
    releaseDate: tmdbMovie.release_date,
    revenue: tmdbMovie.revenue,
    runtime: tmdbMovie.runtime,
    status: tmdbMovie.status,
    tagline: tmdbMovie.tagline,
    title: tmdbMovie.title,
    video: tmdbMovie.video,
    voteAverage: tmdbMovie.vote_average,
    voteCount: tmdbMovie.vote_count,
  };
}

export default createAddaptedMovie;
