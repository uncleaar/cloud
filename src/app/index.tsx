import React from 'react';
import { router } from '../pages/routes';
import { RouterProvider } from 'react-router';
import { Spin } from 'antd';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { store } from './store';
import { Layout } from '@widgets';
import AuthMiddleware from '../helpers/AuthMiddleware';

export const App = () => (
  <Provider store={store}>
    <React.Suspense fallback={<Spin size='large' />}>
      <CookiesProvider>
        <AuthMiddleware>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </AuthMiddleware>
      </CookiesProvider>
    </React.Suspense>
  </Provider>
);
