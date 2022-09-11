import RateInfo from '@/components/RateInfo';
import LoadImage from '@/components/LoadImage';
import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import { Button, Text, Space, Box, Group } from '@mantine/core';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import MovieResult from '../types/MovieResult';
import Loader from '@/components/Loader';

function SearchResultsItem({ movieResult }: { movieResult: MovieResult }) {
  const imagePath = useTMDBImagePath(movieResult.posterPath, 'w342');

  const { id, title, year } = movieResult;

  return (
    <Box>
      <Button
        variant='subtle'
        color='dark'
        component={Link}
        to={`/movie/${id}`}
        radius={4}
        sx={() => ({
          height: 'auto',
          width: '100%',
        })}
      >
        <div>
          <Space h='xs' />
          <Suspense fallback={<Loader height={270} />}>
            <LoadImage src={imagePath} width={180} height={270} radius={4} />
          </Suspense>
          <Space h='xs' />
          <Text weight={700} size='md' sx={() => ({ whiteSpace: 'break-spaces' })}>
            {title}
          </Text>
          <Group align={'center'}>
            <Text size='sm' pt='xs'>
              <RateInfo rate={movieResult?.voteAverage} />
            </Text>
            <Text weight={600}>{year || ''}</Text>
          </Group>
          <Space h='xs' />
        </div>
      </Button>
    </Box>
  );
}

export default SearchResultsItem;
