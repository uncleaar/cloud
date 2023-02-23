import { useState } from 'react';

import { IntlContext } from './IntlContext';

interface IntlProviderProps {
  locale: 'RU' | 'EN' | 'KZ';
  messages: Record<string, any>;
  children: React.ReactNode;
}

export const IntlProvider: React.FC<IntlProviderProps> = ({ locale, messages, children }) => {
  const [intlValues, setIntlValues] = useState({ locale });
  return <IntlContext.Provider value={{ locale, messages }}>{children}</IntlContext.Provider>;
};
