import { useSearchMoviesTerm } from '@/global-states/useSearchMoviesTerm';
import { useDebouncedValue } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import searchMovies from '../services/searchMovies';

function useSearchMovies() {
  const { searchTerm, setSearchTerm } = useSearchMoviesTerm();
  const [debouncedSearchTerm] = useDebouncedValue(searchTerm, 400);

  const query = useQuery(
    ['movieSearch', { searchTerm: debouncedSearchTerm }],
    () => searchMovies(debouncedSearchTerm),
    {
      enabled: debouncedSearchTerm.length > 0,
    },
  );

  return {
    searchTerm,
    setSearchTerm,
    ...query,
  };
}

export default useSearchMovies;
