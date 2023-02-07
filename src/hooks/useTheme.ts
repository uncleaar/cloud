import { ThemeContext } from '@context/theme';
import React from 'react';

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return { ...themeContext };
};
