import { ProvideSearchMoviesPage } from '@/global-states/useSearchMoviesPage';
import { ProvideSearchMoviesTerm } from '@/global-states/useSearchMoviesTerm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function PageWrapper({ component, route }: { component: JSX.Element; route: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProvideSearchMoviesTerm>
        <ProvideSearchMoviesPage>
          <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
        </ProvideSearchMoviesPage>
      </ProvideSearchMoviesTerm>
    </QueryClientProvider>
  );
}

export default PageWrapper;
