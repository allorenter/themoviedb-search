import InputSearch from './components/InputSearch';
import useSearchMovies from './hooks/useSearchMovies';
import SearchResults from './components/SearchResults';
import PageHeader from '@/components/PageHeader';
import { Loader, Space, Center } from '@mantine/core';
import { useSearchMoviesPage } from '@/global-states/useSearchMoviesPage';

function SearchMovies() {
  const { searchTerm, setSearchTerm, data, isFetching, isLoading } = useSearchMovies();
  const { page, setPage } = useSearchMoviesPage();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (page !== 1) {
      setPage(1);
    }
  };

  return (
    <>
      <PageHeader title='Buscador de películas' showGoBackButton={false} />
      <InputSearch value={searchTerm} onChange={onChange} />
      <Space h='md' />
      {isFetching && isLoading ? (
        <Center mt={12}>
          <Loader color={'gray'} />
        </Center>
      ) : (
        <SearchResults moviesSearch={data} />
      )}
    </>
  );
}

export default SearchMovies;
