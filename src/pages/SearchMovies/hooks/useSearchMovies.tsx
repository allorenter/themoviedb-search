import { useSearchMoviesPage } from '@/global-states/useSearchMoviesPage';
import { useSearchMoviesTerm } from '@/global-states/useSearchMoviesTerm';
import useQueryError from '@/hooks/useQueryError';
import { useDebouncedValue } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import searchMovies from '../services/searchMovies';

function useSearchMovies() {
  const { searchTerm, setSearchTerm } = useSearchMoviesTerm();
  const { page } = useSearchMoviesPage();
  const [debouncedSearchTerm] = useDebouncedValue(searchTerm, 400);

  const query = useQuery(
    ['movieSearch', { searchTerm: debouncedSearchTerm, page }],
    () => searchMovies(debouncedSearchTerm, page),
    {
      enabled: debouncedSearchTerm.length > 0,
    },
  );
  useQueryError(query);

  return {
    searchTerm,
    setSearchTerm,
    ...query,
  };
}

export default useSearchMovies;
