import React from 'react';

export interface IntlContextProps {
  locale: 'RU' | 'EN' | 'KZ';
  messages: Record<string, any>;
}

export const IntlContext = React.createContext<IntlContextProps>({ locale: 'RU', messages: {} });
