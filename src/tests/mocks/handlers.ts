import { rest } from 'msw';

export const movies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/i1oWUGVDNBhGBykcCRBlX326udb.jpg',
      genre_ids: [80, 18, 36, 53],
      id: 117,
      original_language: 'en',
      original_title: 'The Untouchables',
      overview:
        'El joven agente del tesoro Elliot Ness llega a Chicago con la determinación de detener a Al Capone. No va a ser tarea fácil, puesto que Capone tiene a la policía en el bolsillo. Ness conoce a Jimmy Malone, un guardia veterano y probablemente el más honrado de todo el cuerpo, al que Ness pide ayuda en su cruzada contra Capone.',
      popularity: 26.385,
      poster_path: '/pVcWaUbFDL76ObIsReIBQ5ILMHv.jpg',
      release_date: '1987-06-03',
      title: 'Los intocables de Eliot Ness',
      video: false,
      vote_average: 7.8,
      vote_count: 4719,
    },
    {
      adult: false,
      backdrop_path: '/vugZESok4pO1RGW35QCyrM3V23u.jpg',
      genre_ids: [53],
      id: 163533,
      original_language: 'fr',
      original_title: 'Pouvoir intime',
      overview: '',
      popularity: 0.6,
      poster_path: '/8q4X8s4m3dw5MAd6fZqmAoqZjXz.jpg',
      release_date: '1986-03-05',
      title: 'Pouvoir intime',
      video: false,
      vote_average: 5.5,
      vote_count: 4,
    },
  ],
  total_pages: 1,
  total_results: 2,
};

export const handlers = [
  rest.all(`https://api.themoviedb.org/3/search/movie`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movies));
  }),
];
