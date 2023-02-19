import { useContext, useEffect, useMemo, useReducer } from 'react';

import { Client } from '@shared/api';

import { AuthContext, stateReducer } from './AuthContext';

type StateContextProviderProps = { children: React.ReactNode };

type State = {
  authUser: Client | null;
};

export const INITIAL_STORE: State = {
  authUser: null
};

const getInitialState = () => {
  const localData = localStorage.getItem('client');
  return localData ? JSON.parse(localData) : [];
};

export const AuthContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STORE, getInitialState);

  const value = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  );

  useEffect(() => {
    localStorage.setItem('client', JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useStateContext = () => {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};
