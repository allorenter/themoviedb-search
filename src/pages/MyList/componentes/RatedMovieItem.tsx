import LoadImage from '@/components/LoadImage';
import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import RatedMovie from '@/types/RatedMovie';
import { Box, Button, Group, Text } from '@mantine/core';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loader from '@/components/Loader';

function RatedMovieItem({ ratedMovie }: { ratedMovie: RatedMovie }) {
  const imagePath = useTMDBImagePath(ratedMovie?.posterPath || '', 'w92');

  return (
    <Button
      key={ratedMovie.id}
      variant='subtle'
      color='dark'
      component={Link}
      to={`/movie/${ratedMovie.id}`}
      radius={4}
      sx={() => ({
        height: 'auto',
        width: '100%',
        display: 'flex',
      })}
    >
      <Group position='left'>
        <Suspense fallback={<Loader />}>
          <LoadImage src={imagePath || undefined} width={92} radius={4} />
        </Suspense>
        <Box>
          <Text size={'xl'} weight={'700'}>
            {ratedMovie.title}
          </Text>
          <Group>
            <Text>{ratedMovie.rate}</Text>
            <Text>{ratedMovie.comments}</Text>
          </Group>
        </Box>
      </Group>
    </Button>
  );
}

export default RatedMovieItem;
