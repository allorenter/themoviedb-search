import { describe, test, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchMovies from '@/pages/SearchMovies';
import { movies } from './mocks/handlers';
import PageWrapper from './PageWrapper';

describe('SearchMovies tests', () => {
  beforeEach(() => {
    render(<PageWrapper component={<SearchMovies />} path='' route='' />);
  });

  test('Should list movies', async () => {
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'los intocables de ' } });

    await waitFor(() => {
      movies.results.forEach((movie) => {
        expect(screen.getByText(movie.title)).toBeDefined();
      });
    });
  });
});
