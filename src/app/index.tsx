import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate, RouterProvider } from 'react-router';
import { Spin } from 'antd';
import { CookiesProvider } from 'react-cookie';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './store';
import { AppRoutes } from './routes/routes';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<Spin size='large' />}>
        <CookiesProvider>
          <PersistGate persistor={persistor}>
            <AppRoutes />
          </PersistGate>
        </CookiesProvider>
      </React.Suspense>
    </Provider>
  );
};
