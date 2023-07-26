import { Suspense, lazy } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import { ProvideSearchMoviesTerm } from './global-states/useSearchMoviesTerm';
import { NotificationsProvider } from '@mantine/notifications';
import { ProvideSearchMoviesPage } from './global-states/useSearchMoviesPage';
import Loader from '@/components/Loader';
import useTheme from './hooks/useTheme';

const SearchMovies = lazy(() => import('@/pages/SearchMovies'));
const Movie = lazy(() => import('@/pages/Movie'));
const MyList = lazy(() => import('@/pages/MyList'));

const queryClient = new QueryClient();

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ColorSchemeProvider colorScheme={theme} toggleColorScheme={toggleTheme}>
      <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <QueryClientProvider client={queryClient}>
            <ProvideSearchMoviesTerm>
              <ProvideSearchMoviesPage>
                <BrowserRouter>
                  <Layout>
                    <Suspense fallback={<Loader />}>
                      <Routes>
                        <Route path='movie/:movieId' element={<Movie />} />
                        <Route path='mylist' element={<MyList />} />
                        <Route path='' element={<SearchMovies />} />
                      </Routes>
                    </Suspense>
                  </Layout>
                </BrowserRouter>
              </ProvideSearchMoviesPage>
            </ProvideSearchMoviesTerm>
          </QueryClientProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
