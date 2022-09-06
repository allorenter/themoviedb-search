import { useEffect } from 'react';
import { searchMovies } from './services/movie';

function SearchMovies() {
  useEffect(() => {
    const searchResult = searchMovies('el señor de los anillos').then((data) => {
      console.log('data', data);
    });
  }, []);

  return <>Search page</>;
}

export default SearchMovies;
