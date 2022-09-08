import { createContext, useContext, useState } from 'react';

const initalContextValue: {
  searchTerm: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setSearchTerm: Function;
} = {
  searchTerm: '',
  setSearchTerm: () => undefined,
};

const SearchMoviesSearchTermContext = createContext(initalContextValue);

export const ProvideSearchMoviesTerm = ({ children }: { children: JSX.Element }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <SearchMoviesSearchTermContext.Provider value={{ searchTerm, setSearchTerm: updateSearchTerm }}>
      {children}
    </SearchMoviesSearchTermContext.Provider>
  );
};

export const useSearchMoviesTerm = () => {
  return useContext(SearchMoviesSearchTermContext);
};
