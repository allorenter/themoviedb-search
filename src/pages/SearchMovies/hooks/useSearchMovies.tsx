import { useDebouncedValue } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import searchMovies from '../services/searchMovies';

function useSearchMovies() {
  // debe ser un estado global
  const [searchTerm, setSearchTerm] = useState('');
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
