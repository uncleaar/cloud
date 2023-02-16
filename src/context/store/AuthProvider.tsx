import { Client } from '@shared/api';
import { useContext, useEffect, useReducer } from 'react';
import { AuthContext, stateReducer } from './AuthContext';

type StateContextProviderProps = { children: React.ReactNode };

type State = {
  authUser: Client | null;
};

const initialState: State = {
  authUser: null
};

const getInitialState = () => {
  const localData = localStorage.getItem('client');
  return localData ? JSON.parse(localData) : [];
};

export const AuthContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState, getInitialState);

  const value = { state, dispatch };

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
