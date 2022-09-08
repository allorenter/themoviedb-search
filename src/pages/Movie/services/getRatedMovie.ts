import RatedMovie from '@/types/RatedMovie';
import { LOCALSTORAGE_RATEDMOVIES_KEY } from '../../../constants';

function getRatedMovie(movieId?: number): Promise<RatedMovie | undefined> {
  return new Promise((resolve, reject) => {
    try {
      const ratedMovies: RatedMovie[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_RATEDMOVIES_KEY) || '[]',
      );
      const foundRatedMovie = ratedMovies.find(({ id }) => movieId === id);

      return resolve(foundRatedMovie);
    } catch (e: any) {
      return reject(e);
    }
  });
}

export default getRatedMovie;
