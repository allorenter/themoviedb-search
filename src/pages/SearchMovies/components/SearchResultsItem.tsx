import { Image } from '@mantine/core';
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
      <Link to={`/movie/${movieResult.id}`}>
        <Image src={imagePath || undefined} width={180} />
        {movieResult.title}
      </Link>
    </div>
  );
}

export default SearchResultsItem;
