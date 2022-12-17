import React from 'react';
import { router } from '../pages/routes';
import { RouterProvider } from 'react-router';
import { Spin } from 'antd';

export const App = () => (
  <React.Suspense fallback={<Spin size='large' />}>
    <RouterProvider router={router} />
  </React.Suspense>
);
