import useQueryError from '@/hooks/useQueryError';
import { useQuery } from '@tanstack/react-query';
import getMovie from '../services/getMovie';

function useGetMovie(movieId?: string) {
  const query = useQuery(['getMovie', { movieId }], () => getMovie(movieId));
  useQueryError(query);

  return query;
}

export default useGetMovie;
