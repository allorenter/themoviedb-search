import { useState } from 'react';
import { ColorScheme } from '@mantine/core';

const LOCALSTORAGE_THEME_KEY = 'theme';

function useTheme() {
  const [theme, setTheme] = useState<ColorScheme>(() => {
    const localStorageValue = window.localStorage.getItem(LOCALSTORAGE_THEME_KEY);
    if (localStorageValue) return localStorageValue as ColorScheme;
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    return userPreference;
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
