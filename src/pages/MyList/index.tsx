import PageHeader from '@/components/PageHeader';
import { Space, Stack } from '@mantine/core';
import RatedMovieItem from './componentes/RatedMovieItem';
import useGetRatedMovies from './hooks/useGetRatedMovies';
import Loader from '@/components/Loader';

function MyList() {
  const { data, isLoading, isFetching } = useGetRatedMovies();

  return (
    <>
      <PageHeader title='Mi Lista' showGoBackButton={true} />
      <Space h='lg' />
      {isFetching && isLoading ? (
        <Loader />
      ) : (
        <Stack>
          {data?.map((ratedMovie) => (
            <RatedMovieItem key={ratedMovie.id} ratedMovie={ratedMovie} />
          ))}
        </Stack>
      )}
    </>
  );
}

export default MyList;
