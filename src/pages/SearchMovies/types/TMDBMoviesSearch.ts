import TMDBMovieResult from './TMDBMovieResult';

export default interface TMDBMoviesSearch {
  page: number;
  results: TMDBMovieResult[];
  total_pages: number;
  total_results: number;
}
