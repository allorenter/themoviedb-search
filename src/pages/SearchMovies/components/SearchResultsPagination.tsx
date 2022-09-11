import { useSearchMoviesPage } from '@/global-states/useSearchMoviesPage';
import { Button, Group, Text } from '@mantine/core';
import MoviesSearch from '../types/MoviesSearch';

function SearchResultsPagination({ moviesSearch }: { moviesSearch: MoviesSearch }) {
  const { page, setPage } = useSearchMoviesPage();

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  if (!moviesSearch.page) {
    return <></>;
  }

  return (
    <Group align={'end'} position='apart'>
      <Text size={'sm'} weight={600}>
        Resultados: {moviesSearch.totalResults}
      </Text>
      {moviesSearch.totalResults > 0 && (
        <Group align={'end'}>
          <Text
            size={'sm'}
            weight={600}
          >{`Página ${moviesSearch.page} de ${moviesSearch.totalPages}`}</Text>
          <Button
            sx={() => ({ fontSize: '1.1rem' })}
            variant='light'
            radius={4}
            onClick={previousPage}
            disabled={page === 1}
            compact
          >
            {'<'}
          </Button>
          <Button
            sx={() => ({ fontSize: '1.1rem' })}
            variant='light'
            radius={4}
            onClick={nextPage}
            disabled={page === moviesSearch.totalPages}
            compact
          >
            {'>'}
          </Button>
        </Group>
      )}
    </Group>
  );
}

export default SearchResultsPagination;
