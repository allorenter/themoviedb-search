import RatedMovie from '@/types/RatedMovie';

const LOCALSTORAGE_RATEDMOVIES_KEY = 'ratedMovies';

function getLocalStorageRatedMovies() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_RATEDMOVIES_KEY) || '[]');
}

function setLocalStorageRatedMovies(ratedMovies: RatedMovie[]) {
  localStorage.setItem(LOCALSTORAGE_RATEDMOVIES_KEY, JSON.stringify(ratedMovies));
  return ratedMovies;
}

function rateMovie(ratedMovie: RatedMovie): Promise<RatedMovie> {
  return new Promise((resolve, reject) => {
    try {
      // si no está seteado el localStorage, guardo la película
      if (getLocalStorageRatedMovies() === null) {
        setLocalStorageRatedMovies([ratedMovie]);
        return resolve(ratedMovie);
      }

      // obtengo el array del localStorage
      const ratedMoviesList: RatedMovie[] = getLocalStorageRatedMovies();

      // la película no estaba valorada
      const foundMovieIndex = ratedMoviesList.findIndex(({ id }) => id === ratedMovie.id);
      if (foundMovieIndex === -1) {
        const newRatedMovies = [...ratedMoviesList, ratedMovie];
        setLocalStorageRatedMovies(newRatedMovies);
        return resolve(ratedMovie);
      }

      // la película ya estaba valorada
      const newRatedMovies = ratedMoviesList.map((rMovie) => {
        if (rMovie.id === ratedMovie.id) {
          return ratedMovie;
        }
        return rMovie;
      });

      setLocalStorageRatedMovies(newRatedMovies);
      return resolve(ratedMovie);
    } catch (e: any) {
      return reject(e);
    }
  });
}

export default rateMovie;
