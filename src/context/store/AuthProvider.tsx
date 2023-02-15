import { Client } from '@shared/api';
import { useContext, useReducer } from 'react';
import { AuthContext, stateReducer } from './AuthContext';

type StateContextProviderProps = { children: React.ReactNode };

type State = {
  authUser: Client | null;
};

const initialState: State = {
  authUser: null
};

export const AuthContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useStateContext = () => {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};
