import useQueryError from '@/hooks/useQueryError';
import RatedMovie from '@/types/RatedMovie';
import { useMutation } from '@tanstack/react-query';
import rateMovie from '../services/rateMovie';

function useRateMovie() {
  const mutation = useMutation(['rateMovie'], (ratedMovie: RatedMovie) => rateMovie(ratedMovie));
  useQueryError(mutation);

  return mutation;
}

export default useRateMovie;
