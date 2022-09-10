import { createContext, useContext, useState } from 'react';

const initalContextValue: {
  page: number;
  setPage: (page: number) => void;
} = {
  page: 1,
  setPage: () => undefined,
};

const SearchMoviesPageContext = createContext(initalContextValue);

export const ProvideSearchMoviesPage = ({ children }: { children: JSX.Element }) => {
  const [page, setPage] = useState(1);

  return (
    <SearchMoviesPageContext.Provider value={{ page, setPage }}>
      {children}
    </SearchMoviesPageContext.Provider>
  );
};

export const useSearchMoviesPage = () => {
  return useContext(SearchMoviesPageContext);
};
