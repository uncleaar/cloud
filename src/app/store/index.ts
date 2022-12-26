import { configureStore } from '@reduxjs/toolkit';
import { auth } from '@shared/api/auth';
import { user } from '@shared/api/user';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import userReducer from '../../features/userSlice';

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [user.reducerPath]: user.reducer,
    userState: userReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([auth.middleware, user.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
