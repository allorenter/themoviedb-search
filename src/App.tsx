import { MantineProvider, Text, Button, Stack } from '@mantine/core';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchMovies from '@/pages/SearchMovies';
import Movie from '@/pages/Movie';
import MyList from '@/pages/MyList';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='movie/:movieId' element={<Movie />} />
            <Route path='mylist' element={<MyList />} />
            <Route path='' element={<SearchMovies />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  );
}
