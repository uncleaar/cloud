import React from 'react';

import type { Theme } from './ThemeContext';
import { ThemeContext,ThemeContextProps  } from './ThemeContext';


interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeContext] = React.useState<ThemeContextProps['theme']>(
    (localStorage.getItem('theme') as Theme) || 'dark'
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const setTheme = React.useCallback(
    (theme: Theme) => {
      localStorage.setItem('theme', theme);
      setThemeContext(theme);
    },
    [theme]
  );

  const value = React.useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
