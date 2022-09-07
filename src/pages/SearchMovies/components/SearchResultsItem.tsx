import { Button, Image, NavLink, Space } from '@mantine/core';
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

  return (
    <div>
      <Button
        variant='subtle'
        color='dark'
        component={Link}
        to={`/movie/${movieResult.id}`}
        radius={4}
      >
        <div>
          <Space h='xs' />
          <Image src={imagePath || undefined} width={180} radius={4} />
          <Space h='xs' />
          {movieResult.title}
        </div>
      </Button>
    </div>
  );
}

export default SearchResultsItem;
