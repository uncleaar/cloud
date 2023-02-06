import { useCookies } from 'react-cookie';

import React from 'react';
import { ScreenLoader } from '@widgets';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [cookies] = useCookies(['logged_in']);

  if (cookies.logged_in) {
    return <ScreenLoader />;
  }

  return children;
};
