import useTMDBImagePath from '@/hooks/useTMDBImagePath';
import { Button, Image, Text, Space } from '@mantine/core';
import { Link } from 'react-router-dom';
import MovieResult from '../types/MovieResult';

function SearchResultsItem({ movieResult }: { movieResult: MovieResult }) {
  const imagePath = useTMDBImagePath(movieResult.posterPath, 'w342');

  const { id, title, year } = movieResult;

  return (
    <div>
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
          <Image src={imagePath || undefined} width={180} radius={4} />
          <Space h='xs' />
          <Text weight={700} size='md' sx={() => ({ whiteSpace: 'break-spaces' })}>
            {title}
          </Text>
          <Text>{year}</Text>
        </div>
      </Button>
    </div>
  );
}

export default SearchResultsItem;
