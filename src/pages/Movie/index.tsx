import PageHeader from '@/components/PageHeader';
import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import { Badge, Box, Center, Grid, Group, Image, Loader, Space, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';
import RateMovie from './components/RateMovie';
import useGetMovie from './hooks/useGetMovie';

function Movie() {
  const { movieId } = useParams<string>();
  const { data, isLoading } = useGetMovie(movieId);
  const imagePath = useTMDBImagePath(data?.posterPath || '', 'w342');

  if (isLoading) {
    return (
      <Center mt={12}>
        <Loader size={'lg'} color={'gray'} />
      </Center>
    );
  }

  const pageHeaderTitle = `${data?.title} (${data?.year})`;

  return (
    <>
      <Grid>
        <Grid.Col span={5}>
          <Image mt={10} src={imagePath || undefined} width={300} radius={4} />
        </Grid.Col>
        <Grid.Col span={7}>
          <PageHeader title={pageHeaderTitle} description={data?.originalTitle} showGoBackButton />
          <Space h='lg' />
          <Group>
            {/* FALTA COMPONENTE PARA MOSTRAR LA VALORACIÓN DE LOS USUARIOS */}
            <Text weight={700}>{data?.runtime}</Text>
            <Text weight={700}>{data?.releaseDate}</Text>
            <Text>
              {data?.genres.map(({ id, name }) => (
                <Badge key={id}>{name}</Badge>
              ))}
            </Text>
          </Group>
          <Space h='md' />
          <Text>{data?.overview}</Text>
          <Space h='xl' />
          {movieId && <RateMovie movieId={movieId} />}
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Movie;
