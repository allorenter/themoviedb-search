import { useQuery } from '@tanstack/react-query';
import getRatedMovie from '../services/getRatedMovie';

function useGetRatedMovie(movieId?: string) {
  const query = useQuery(['getRatedMovie', { movieId }], () => getRatedMovie(movieId));

  return query;
}

export default useGetRatedMovie;
