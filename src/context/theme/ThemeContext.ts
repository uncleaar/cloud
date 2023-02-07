import React from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const INITIAL_THEME: Theme = (localStorage.getItem('theme') as Theme) || 'dark';

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: INITIAL_THEME,
  setTheme: () => {}
});
