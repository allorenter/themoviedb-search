export interface Movie {
  adult: boolean;
  backdropPath: string;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  id: number;
  imdb_id: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  // production_companies: ProductionCompany[];
  // production_countries: ProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  // spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
