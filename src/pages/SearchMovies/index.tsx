import InputSearch from './components/InputSearch';
import useSearchMovies from './hooks/useSearchMovies';
import SearchResults from './components/SearchResults';
import PageHeader from '@/components/PageHeader';
import { Space } from '@mantine/core';

function SearchMovies() {
  const { searchTerm, setSearchTerm, data } = useSearchMovies();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <>
      <PageHeader text='Buscador de películas' showGoBackButton={false} />
      <InputSearch value={searchTerm} onChange={onChange} />
      <Space h='md' />
      {data !== undefined && <SearchResults moviesSearch={data} />}
    </>
  );
}

export default SearchMovies;
