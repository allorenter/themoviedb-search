import { useEffect } from 'react';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { showNotification } from '@mantine/notifications';
import RatedMovie from '@/types/RatedMovie';

function useQueryError(
  queryResult: UseQueryResult | UseMutationResult<RatedMovie, unknown, RatedMovie, unknown>,
) {
  useEffect(() => {
    if (queryResult.isError) {
      showNotification({
        message: 'Ha ocurrido un error',
        autoClose: 4000,
        color: 'red',
      });
    }
  }, [queryResult]);
}

export default useQueryError;
