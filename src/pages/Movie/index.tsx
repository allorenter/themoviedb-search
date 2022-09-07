import PageHeader from '@/components/PageHeader';
import { useParams } from 'react-router-dom';
import useGetMovie from './hooks/useGetMovie';

function Movie() {
  const { movieId } = useParams();
  const { data } = useGetMovie(movieId);

  return (
    <>
      <PageHeader text={data?.title} showGoBackButton />
      {movieId}
    </>
  );
}

export default Movie;
