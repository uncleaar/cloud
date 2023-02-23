import { useState } from 'react';
import { IntlContext } from './IntlContext';

type Locale = {
  locale: 'RU' | 'EN' | 'KZ';
};

interface IntlProviderProps {
  locale: Locale;
  messages: Record<string, any>;
  children: React.ReactNode;
}

export const IntlProvider: React.FC<IntlProviderProps> = ({ locale, messages, children }) => {
  const [intlValues, setIntlValues] = useState({ locale: 'RU' });
  return <IntlContext.Provider value={intlValues}>{children}</IntlContext.Provider>;
};
