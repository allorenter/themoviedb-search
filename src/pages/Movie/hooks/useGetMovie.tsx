import { useQuery } from '@tanstack/react-query';
import getMovie from '../services/getMovie';

function useGetMovie(movieId?: string) {
  const query = useQuery(['getMovie', { movieId }], () => getMovie(movieId));

  return query;
}

export default useGetMovie;
