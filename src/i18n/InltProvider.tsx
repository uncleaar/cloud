import { useMemo, useState } from 'react';

import { IntlContext } from './IntlContext';

interface IntlProviderProps {
  locale: 'ru' | 'en-US';
  messages: Record<string, string>;
  children: React.ReactNode;
}

export const IntlProvider: React.FC<IntlProviderProps> = ({ locale, messages, children }) => {
  const value = useMemo(() => ({ locale, messages }), []);
  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>;
};
