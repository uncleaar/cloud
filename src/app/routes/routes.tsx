import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ROUTES } from '@shared/constants';
import { Wrapper } from '@widgets';

const HomePage = React.lazy(() => import('../../pages/home'));
const LoginPage = React.lazy(() => import('../../pages/sign-in'));
const RegisterPage = React.lazy(() => import('../../pages/sign-up'));
const VerificationPage = React.lazy(() => import('../../pages/verification'));
const ClassificationPage = React.lazy(() => import('../../pages/classification'));

export const AuthApp = () => (
  <Routes>
    <Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
    <Route path='*' element={<Navigate to={ROUTES.SIGN_IN} />} />
  </Routes>
);

export const AppRoutes = () => (
  <Wrapper>
    <Routes>
      <Route>
        <Route path='' element={<HomePage />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
      <Route path={ROUTES.SIGN_UP} element={<RegisterPage />} />
      <Route path={ROUTES.VERIFICATION} element={<VerificationPage />} />
      <Route path={ROUTES.CLASSIFICATION} element={<ClassificationPage />} />
    </Routes>
    <ToastContainer />
  </Wrapper>
);
