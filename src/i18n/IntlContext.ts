import React from 'react';

export interface IntlContextProps {
  locale: 'ru' | 'en-US';
  messages: Record<string, string>;
}

export const IntlContext = React.createContext<IntlContextProps>({ locale: 'ru', messages: {} });
