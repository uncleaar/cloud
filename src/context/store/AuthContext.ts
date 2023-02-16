import { Client } from '@shared/api';
import { createContext } from 'react';
type State = {
  authUser: Client | null;
};

type Action = {
  type: string;
  payload: Client | null;
};

type Dispatch = (action: Action) => void;

export const AuthContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        authUser: action.payload
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        authUser: null
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
