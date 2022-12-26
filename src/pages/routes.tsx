import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = React.lazy(() => import('./home'));
const LoginPage = React.lazy(() => import('./sign-in'));
const RegisterPage = React.lazy(() => import('./sign-up'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/sign-in',
    element: <LoginPage />
  },
  {
    path: '/sign-up',
    element: <RegisterPage />
  }
]);
