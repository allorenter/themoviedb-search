import PageHeader from '@/components/PageHeader';
import { Center, Loader, Space, Stack } from '@mantine/core';
import RatedMovieItem from './componentes/RatedMovieItem';
import useGetRatedMovies from './hooks/useGetRatedMovies';

function MyList() {
  const { data, isLoading, isFetching } = useGetRatedMovies();

  return (
    <>
      <PageHeader title='Mi Lista' showGoBackButton={true} />
      <Space h='lg' />
      {isFetching && isLoading ? (
        <Center mt={12}>
          <Loader color={'gray'} />
        </Center>
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
