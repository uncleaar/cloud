import React from 'react';
const HomePage = React.lazy(() => import('../../pages/home'));
const LoginPage = React.lazy(() => import('../../pages/sign-in'));
const RegisterPage = React.lazy(() => import('../../pages/sign-up'));

import { ROUTES } from '@shared/constants';
import { Layout } from '@widgets';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const AuthApp = () => (
  <Routes>
    <Route path={ROUTES.SIGNIN} element={<LoginPage />} />
    <Route path='*' element={<Navigate to={ROUTES.SIGNIN} />} />
  </Routes>
);

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route>
          <Route path='' element={<HomePage />} />
        </Route>
        <Route path='sign-in' element={<LoginPage />} />
        <Route path='sign-up' element={<RegisterPage />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
};
