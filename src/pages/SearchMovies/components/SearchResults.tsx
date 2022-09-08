import { SimpleGrid } from '@mantine/core';
import MoviesSearch from '../types/MoviesSearch';
import SearchResultsItem from './SearchResultsItem';

function SearchResults({ moviesSearch }: { moviesSearch?: MoviesSearch }) {
  if (!moviesSearch) {
    return <></>;
  }

  return (
    <SimpleGrid
      cols={4}
      spacing='lg'
      breakpoints={[
        { maxWidth: 980, cols: 5, spacing: 'md' },
        { maxWidth: 755, cols: 3, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      {moviesSearch.results.map((movieResult) => {
        return <SearchResultsItem key={movieResult.id} movieResult={movieResult} />;
      })}
    </SimpleGrid>
  );
}

export default SearchResults;
