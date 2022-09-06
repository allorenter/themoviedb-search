import useSearchMovies from './hooks/useSearchMovies';

function SearchMovies() {
  const { searchTerm, setSearchTerm, data } = useSearchMovies();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return <input value={searchTerm} onChange={onChange} />;
}

export default SearchMovies;
