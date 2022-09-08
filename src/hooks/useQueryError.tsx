import { useEffect } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { showNotification } from '@mantine/notifications';

function useQueryError(query: UseQueryResult) {
  useEffect(() => {
    if (query.isError) {
      showNotification({
        message: 'Ha ocurrido un error',
        autoClose: 4000,
        color: 'red',
      });
    }
  }, [query.isError]);
}

export default useQueryError;
