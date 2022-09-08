import { useQuery } from '@tanstack/react-query';
import getRatedMovies from '../services/getRatedMovies';

function useGetRatedMovies() {
  const query = useQuery(['getRatedMovies'], () => getRatedMovies());

  return query;
}

export default useGetRatedMovies;
