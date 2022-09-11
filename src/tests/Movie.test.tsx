import { describe, test, beforeEach, expect } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Movie from '@/pages/Movie';
import { movie } from './mocks/handlers';
import PageWrapper from './PageWrapper';

describe('Movie tests', () => {
  beforeEach(() => {
    render(<PageWrapper component={<Movie />} route='/movie/117' />);
  });

  test('Should render movie', async () => {
    const year = new Date(movie.release_date).getFullYear();

    await waitFor(() => {
      expect(screen.getByText(`${movie.title} (${year})`)).toBeDefined();
    });
  });

  test('Should save rate', async () => {
    const rateInput = screen.getByLabelText('rate-input') as HTMLInputElement;
    const commentsTextarea = screen.getByLabelText('comments-textarea') as HTMLInputElement;
    const saveButton = screen.getByText('Guardar');

    fireEvent.change(rateInput, { target: { value: '9 ' } });
    fireEvent.change(commentsTextarea, { target: { value: 'Comment' } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      const result = localStorage.getItem('ratedMovies');
      const items = JSON.parse(result || '[]');
      const id = items[0]?.id;
      expect(id).toBe(117);
    });
  });
});
