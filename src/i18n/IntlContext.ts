import React from 'react';

export interface IntlContextProps {
  locale: 'RU' | 'EN' | 'KZ';
  messages: Record<string, string>;
}

export const IntlContext = React.createContext<IntlContextProps>({ locale: 'RU', messages: {} });
