import { createContext, useContext, useState } from 'react';

const initalContextValue: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
} = {
  searchTerm: '',
  setSearchTerm: () => undefined,
};

const SearchMoviesSearchTermContext = createContext(initalContextValue);

export const ProvideSearchMoviesTerm = ({ children }: { children: JSX.Element }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchMoviesSearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchMoviesSearchTermContext.Provider>
  );
};

export const useSearchMoviesTerm = () => {
  return useContext(SearchMoviesSearchTermContext);
};
