import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, Spin } from 'antd';
import { CookiesProvider } from 'react-cookie';
import { AppRoutes } from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { AuthMiddleware } from '@middleware';
import { ThemeProvider } from '@context/theme';
import { AuthContextProvider } from '@context/store';

import './styles/globals.css';

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

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Spin size='large' />}>
        <ThemeProvider>
          <AuthContextProvider>
            <AuthMiddleware>
              <AppRoutes />
            </AuthMiddleware>
          </AuthContextProvider>
        </ThemeProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </React.Suspense>
    </QueryClientProvider>
  );
};
