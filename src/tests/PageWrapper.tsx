import { ProvideSearchMoviesPage } from '@/global-states/useSearchMoviesPage';
import { ProvideSearchMoviesTerm } from '@/global-states/useSearchMoviesTerm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function PageWrapper({
  component,
  path,
  route,
}: {
  component: JSX.Element;
  path: string;
  route: string;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProvideSearchMoviesTerm>
        <ProvideSearchMoviesPage>
          <MemoryRouter initialEntries={[route]}>
            <Routes>
              <Route path={path} element={component} />
            </Routes>
          </MemoryRouter>
        </ProvideSearchMoviesPage>
      </ProvideSearchMoviesTerm>
    </QueryClientProvider>
  );
}

export default PageWrapper;
