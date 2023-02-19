import React from 'react';

import { ThemeContext } from '@context/theme';

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return { ...themeContext };
};
