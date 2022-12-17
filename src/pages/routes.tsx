import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = React.lazy(() => import('./home'));
const LoginPage = React.lazy(() => import('./login'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);
