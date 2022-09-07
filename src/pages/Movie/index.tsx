import { useParams } from 'react-router-dom';

function Movie() {
  const { movieId } = useParams();

  return <>{movieId}</>;
}

export default Movie;
