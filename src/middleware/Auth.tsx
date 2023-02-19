import React from 'react';
import { useCookies } from 'react-cookie';

import { useLocalStorage } from '@hooks';
import { ScreenLoader } from '@widgets';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [name] = useLocalStorage<{}>('client');

  if (name) {
    return <ScreenLoader />;
  }

  return children;
};
