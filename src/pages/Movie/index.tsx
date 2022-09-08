import PageHeader from '@/components/PageHeader';
import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import { Grid, Image } from '@mantine/core';
import { useParams } from 'react-router-dom';
import useGetMovie from './hooks/useGetMovie';

function Movie() {
  const { movieId } = useParams();
  const { data } = useGetMovie(movieId);
  const imagePath = useTMDBImagePath(data?.posterPath || '', 'w342');

  const pageHeaderTitle = `${data?.title} (${data?.year})`;

  return (
    <>
      <Grid>
        <Grid.Col span={5}>
          <Image mt={10} src={imagePath || undefined} width={300} radius={4} />
        </Grid.Col>
        <Grid.Col span={7}>
          <PageHeader title={pageHeaderTitle} description={data?.originalTitle} showGoBackButton />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Movie;
