import { message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import { AuthContextProvider } from '@context/store';
import { ThemeProvider } from '@context/theme';
import { IntlProvider } from '@i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRoutes } from './routes/routes';

import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.scss';
import { getLocale, getMessages } from '@helpers';

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
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState({});
  const locale = getLocale();

  useEffect(() => {
    const preloads = [getMessages(locale)];
    Promise.all(preloads).then(([messages]) => {
      setMessages(messages);
      console.log(messages.default, 'messages');
      setIsLoading(false);
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Spin size='large' />}>
        <IntlProvider locale={locale} messages={messages}>
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
};
