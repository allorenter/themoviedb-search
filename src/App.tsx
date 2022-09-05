import { MantineProvider, Text, Button, Stack } from '@mantine/core';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Movie from './pages/Movie';
import MyList from './pages/MyList';

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path='movie/:movieId' element={<Movie />} />
          <Route path='mylist' element={<MyList />} />
          <Route path='' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
