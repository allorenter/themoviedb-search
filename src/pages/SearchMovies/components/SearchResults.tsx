import MoviesSearch from '../types/MoviesSearch';

function SearchResults({ moviesSearch }: { moviesSearch: MoviesSearch }) {
  return (
    <>
      {moviesSearch.results.map((movieResult) => {
        return <div key={movieResult.id}>{movieResult.title}</div>;
      })}
    </>
  );
}

export default SearchResults;
