import { MovieSearchResults } from '../types/MovieSearchResults';

function SearchResults({ movieSearchResults }: { movieSearchResults: MovieSearchResults }) {
  return (
    <>
      search result
      {movieSearchResults.results.map((searchResultsMovie) => {
        return <div key={searchResultsMovie.id}>{searchResultsMovie.title}</div>;
      })}
    </>
  );
}

export default SearchResults;
