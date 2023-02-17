import { useCookies } from 'react-cookie';

import React from 'react';
import { ScreenLoader } from '@widgets';
import { useLocalStorage } from '@hooks';

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
