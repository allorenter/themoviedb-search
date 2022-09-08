import PageHeader from '@/components/PageHeader';
import { Stack } from '@mantine/core';
import RatedMovieItem from './componentes/RatedMovieItem';
import useGetRatedMovies from './hooks/useGetRatedMovies';

function MyList() {
  const { data, isLoading, isFetching } = useGetRatedMovies();

  return (
    <>
      <PageHeader title='Mi Lista' showGoBackButton={true} />
      <Stack mt={24}>
        {data?.map((ratedMovie) => (
          <RatedMovieItem key={ratedMovie.id} ratedMovie={ratedMovie} />
        ))}
      </Stack>
    </>
  );
}

export default MyList;
