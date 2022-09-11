import { Suspense, useState, lazy } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import { ProvideSearchMoviesTerm } from './global-states/useSearchMoviesTerm';
import { NotificationsProvider } from '@mantine/notifications';
import { ProvideSearchMoviesPage } from './global-states/useSearchMoviesPage';

const SearchMovies = lazy(() => import('@/pages/SearchMovies'));
const Movie = lazy(() => import('@/pages/Movie'));
const MyList = lazy(() => import('@/pages/MyList'));

const queryClient = new QueryClient();

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Suspense fallback={<></>}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <QueryClientProvider client={queryClient}>
              <ProvideSearchMoviesTerm>
                <ProvideSearchMoviesPage>
                  <BrowserRouter>
                    <Layout>
                      <Routes>
                        <Route path='movie/:movieId' element={<Movie />} />
                        <Route path='mylist' element={<MyList />} />
                        <Route path='' element={<SearchMovies />} />
                      </Routes>
                    </Layout>
                  </BrowserRouter>
                </ProvideSearchMoviesPage>
              </ProvideSearchMoviesTerm>
            </QueryClientProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Suspense>
  );
}
