import { user } from '@shared/api/user';
import { ScreenLoader } from '@widgets';
import React from 'react';
import { useCookies } from 'react-cookie';

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(['logged_in']);

  const { isLoading } = user.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in
  });

  if (isLoading) {
    return <ScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
