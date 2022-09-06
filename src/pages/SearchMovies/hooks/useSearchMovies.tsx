import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import searchMovies from '../services/searchMovies';

function useSearchMovies() {
  // debe ser un estado global
  const [searchTerm, setSearchTerm] = useState('');
  const query = useQuery(['movieSearch', { searchTerm }], () => searchMovies(searchTerm), {
    enabled: searchTerm.length > 0,
  });

  return {
    searchTerm,
    setSearchTerm,
    ...query,
  };
}

export default useSearchMovies;
