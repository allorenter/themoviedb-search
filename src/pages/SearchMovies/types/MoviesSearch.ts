import MovieResult from './MovieResult';

export default interface MoviesSearch {
  page: number;
  results: MovieResult[];
  totalPages: number;
  totalResults: number;
}
