import { useParams } from 'react-router-dom';

function Movie() {
  const { movieId } = useParams();

  return <>Movie page movieId: {movieId}</>;
}

export default Movie;
