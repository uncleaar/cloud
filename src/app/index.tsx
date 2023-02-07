import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Spin } from 'antd';
import { CookiesProvider } from 'react-cookie';
import { AppRoutes } from './routes/routes';
import { StateContextProvider } from '@context/store';
import 'react-toastify/dist/ReactToastify.css';
import { AuthMiddleware } from '@middleware';

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
        <StateContextProvider>
          <AuthMiddleware>
            <AppRoutes />
          </AuthMiddleware>
        </StateContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </React.Suspense>
    </QueryClientProvider>
  );
};
