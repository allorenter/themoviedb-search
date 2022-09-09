import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { theme } from '@/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchMovies from '@/pages/SearchMovies';
import Movie from '@/pages/Movie';
import MyList from '@/pages/MyList';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import { ProvideSearchMoviesTerm } from './global-states/useSearchMoviesTerm';
import { NotificationsProvider } from '@mantine/notifications';
import { ProvideSearchMoviesPage } from './global-states/useSarchMoviesPage';

const queryClient = new QueryClient();

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
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
  );
}
