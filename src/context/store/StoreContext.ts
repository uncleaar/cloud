import React from 'react';
import { Client } from '@shared/api';

type State = {
  authUser: Client | null;
};

type Action = {
  type: string;
  payload: Client | null;
};

type Dispatch = (action: Action) => void;

export const StateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

const useStateContext = () => {
  const context = React.useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};

export { useStateContext };
