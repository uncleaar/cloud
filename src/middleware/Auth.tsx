import { useCookies } from 'react-cookie';

import React from 'react';
import { ScreenLoader } from '@widgets';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [cookies] = useCookies(['AUTH_TOKEN']);

  if (cookies.AUTH_TOKEN) {
    return <ScreenLoader />;
  }

  return children;
};
