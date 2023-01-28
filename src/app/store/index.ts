import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '@shared/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../../features/userSlice';

const persistConfig = {
  key: 'counter',
  storage
};

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  userState: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([authApi.middleware])
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
