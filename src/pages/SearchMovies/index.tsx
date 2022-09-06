import InputSearch from './components/InputSearch';
import useSearchMovies from './hooks/useSearchMovies';
import SearchResults from './components/SearchResults';

function SearchMovies() {
  const { searchTerm, setSearchTerm, data } = useSearchMovies();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <>
      <InputSearch value={searchTerm} onChange={onChange} />
      {data !== undefined && <SearchResults movieSearchResults={data} />}
    </>
  );
}

export default SearchMovies;
