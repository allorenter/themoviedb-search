import MoviesSearch from '../types/MoviesSearch';
import SearchResultsItem from './SearchResultsItem';

function SearchResults({ moviesSearch }: { moviesSearch: MoviesSearch }) {
  return (
    <>
      {moviesSearch.results.map((movieResult) => {
        return <SearchResultsItem key={movieResult.id} movieResult={movieResult} />;
      })}
    </>
  );
}

export default SearchResults;
