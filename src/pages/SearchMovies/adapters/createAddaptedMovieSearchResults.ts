import { MovieSearchResults, SearchResultMovie } from '../types/MovieSearchResults';
import { TMDBMovieSearchResults, TMDBSearchResultMovie } from '../types/TMBDMovieSearchResults';

function createAddaptedMovieSearchResults(
  searchResults: TMDBMovieSearchResults,
): MovieSearchResults {
  const results: SearchResultMovie[] = searchResults.results.map(
    (movieResult: TMDBSearchResultMovie) => {
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
    },
  );
  return {
    page: searchResults.page,
    results,
    totalPages: searchResults.total_pages,
    totalResults: searchResults.total_results,
  };
}

export default createAddaptedMovieSearchResults;
