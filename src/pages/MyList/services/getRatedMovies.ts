import RatedMovie from '@/types/RatedMovie';
import { LOCALSTORAGE_RATEDMOVIES_KEY } from '../../../constants';

function getRatedMovie(): Promise<RatedMovie[] | undefined> {
  return new Promise((resolve, reject) => {
    try {
      const ratedMovies: RatedMovie[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_RATEDMOVIES_KEY) || '[]',
      );

      return resolve(ratedMovies);
    } catch (e: unknown) {
      return reject(e);
    }
  });
}

export default getRatedMovie;
