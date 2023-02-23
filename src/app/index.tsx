import { Spin } from 'antd';
import React from 'react';

import { AuthContextProvider } from '@context/store';
import { ThemeProvider } from '@context/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRoutes } from './routes/routes';

import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.scss';
import { IntlProvider } from '@i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000
    }
  }
});

const themes = {
  dark: {
    '@primary-color': '#1890ff',
    '@text-color': '#fff',
    '@border-color-base': '#666'
  },
  light: {
    '@primary-color': '#1890ff',
    '@text-color': '#333',
    '@border-color-base': '#d9d9d9'
  }
};

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <React.Suspense fallback={<Spin size='large' />}>
      <IntlProvider locale='RU' messages={{ 'button.signIn': 'Sign In' }}>
        <ThemeProvider>
          <AuthContextProvider>
            <AppRoutes />
          </AuthContextProvider>
        </ThemeProvider>
      </IntlProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </React.Suspense>
  </QueryClientProvider>
);
