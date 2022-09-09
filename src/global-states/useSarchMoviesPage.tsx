import { createContext, useContext, useState } from 'react';

const initalContextValue: {
  page: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setPage: Function;
} = {
  page: 1,
  setPage: () => undefined,
};

const SearchMoviesPageContext = createContext(initalContextValue);

export const ProvideSearchMoviesPage = ({ children }: { children: JSX.Element }) => {
  const [page, setPage] = useState(1);

  const updatePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <SearchMoviesPageContext.Provider value={{ page, setPage: updatePage }}>
      {children}
    </SearchMoviesPageContext.Provider>
  );
};

export const useSearchMoviesPage = () => {
  return useContext(SearchMoviesPageContext);
};
