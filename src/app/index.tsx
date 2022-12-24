import React from 'react';
import { router } from '../pages/routes';
import { RouterProvider } from 'react-router';
import { Spin } from 'antd';
import { Provider } from 'react-redux';

export const App = () => (
  //   <Provider store={store}>
  <React.Suspense fallback={<Spin size='large' />}>
    <RouterProvider router={router} />
  </React.Suspense>
  //   </Provider>
);
