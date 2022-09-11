import LoadImage from '@/components/LoadImage';
import PageHeader from '@/components/PageHeader';
import RateInfo from '@/components/RateInfo';
import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import dateToLocaleString from '@/utils/dateToLocaleString';
import minutesConverter from '@/utils/minutesConverter';
import { Badge, Grid, Group, Space, Text } from '@mantine/core';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import RateMovie from './components/RateMovie';
import useGetMovie from './hooks/useGetMovie';
import Loader from '@/components/Loader';

function Movie() {
  const { movieId } = useParams<string>();
  const { data, isLoading } = useGetMovie(movieId);
  const imagePath = useTMDBImagePath(data?.posterPath || '', 'w342');

  if (isLoading) {
    return <Loader />;
  }

  const pageHeaderTitle = `${data?.title} (${data?.year})`;

  return (
    <>
      <Grid>
        <Grid.Col xs={12} md={5}>
          <Suspense fallback={<Loader />}>
            <LoadImage mt={10} src={imagePath || undefined} width={300} radius={4} />
          </Suspense>
        </Grid.Col>
        <Grid.Col xs={12} md={7}>
          <PageHeader title={pageHeaderTitle} description={data?.originalTitle} showGoBackButton />
          <Space h='lg' />
          <Group>
            <RateInfo rate={data?.voteAverage} />
            <Text weight={700}>{minutesConverter(data?.runtime)}</Text>
            <Text weight={700}>{dateToLocaleString(data?.releaseDate)}</Text>
            <Text>
              {data?.genres.map(({ id, name }) => (
                <Badge key={id}>{name}</Badge>
              ))}
            </Text>
          </Group>
          <Space h='md' />
          <Text>{data?.overview}</Text>
          <Space h='xl' />
          {data?.id && <RateMovie movie={data} />}
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Movie;
