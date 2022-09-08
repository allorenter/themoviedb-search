import { Button, Image, Text, Space } from '@mantine/core';
import { Link } from 'react-router-dom';
import MovieResult from '../types/MovieResult';

const getImagePath = (fileSize: string, imagePath: string, svg = false): string | null => {
  if (!imagePath) {
    return null;
  }
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const imagePathArr = imagePath.split('.');
  const imageFormat = svg ? 'svg' : imagePathArr[1];
  return `${baseUrl}${fileSize}${imagePathArr[0]}.${imageFormat}`;
};

function SearchResultsItem({ movieResult }: { movieResult: MovieResult }) {
  const imagePath = getImagePath('w342', movieResult.posterPath);

  const { id, title, releaseDate } = movieResult;
  const year = new Date(releaseDate).getFullYear();

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
