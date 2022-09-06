const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';

async function searchMovies<TMDBSearch>(query: string): Promise<TMDBSearch> {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
    language: 'es',
  });
  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await response.json();
}

export { searchMovies };
