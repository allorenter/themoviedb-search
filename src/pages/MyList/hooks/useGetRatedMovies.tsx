import useQueryError from '@/hooks/useQueryError';
import { useQuery } from '@tanstack/react-query';
import getRatedMovies from '../services/getRatedMovies';

function useGetRatedMovies() {
  const query = useQuery(['getRatedMovies'], () => getRatedMovies());
  useQueryError(query);

  return query;
}

export default useGetRatedMovies;
