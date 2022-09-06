import MoviesSearch from '../types/MoviesSearch';
import TMDBMoviesSearch from '../types/TMDBMoviesSearch';
import TMDBMovieResult from '../types/TMDBMovieResult';
import MovieResult from '../types/MovieResult';

function createAddaptedMoviesSearch(searchResults: TMDBMoviesSearch): MoviesSearch {
  const results: MovieResult[] = searchResults.results.map((movieResult: TMDBMovieResult) => {
    return {
      adult: movieResult.adult,
      backdropPath: movieResult.backdrop_path,
      id: movieResult.id,
      originalTitle: movieResult.original_title,
      overview: movieResult.overview,
      popularity: movieResult.popularity,
      posterPath: movieResult.poster_path,
      releaseDate: movieResult.release_date,
      title: movieResult.title,
      voteAverage: movieResult.vote_average,
    };
  });
  return {
    page: searchResults.page,
    results,
    totalPages: searchResults.total_pages,
    totalResults: searchResults.total_results,
  };
}

export default createAddaptedMoviesSearch;
