import { Client } from '@shared/api';
import { useReducer } from 'react';
import { StateContext } from './StoreContext';

type StateContextProviderProps = { children: React.ReactNode };

type State = {
  authUser: Client | null;
};

type Action = {
  type: string;
  payload: Client | null;
};

const initialState: State = {
  authUser: null
};

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        authUser: action.payload
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const value = { state, dispatch };

  console.log(value, '<value></value>');
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
