export interface SearchResultMovie {
  adult: boolean;
  backdropPath: string;
  id: number;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
}

export interface MovieSearchResults {
  page: number;
  results: SearchResultMovie[];
  totalPages: number;
  totalResults: number;
}
