import { RootObjectMe, RootObjectSignIn } from './types';
import { LoginInput } from '@shared/validation';
import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

api.defaults.headers.common['Content-Type'] = 'application/json';

export const loginUserFn = async (user: LoginInput) => {
  const response = await api.post<RootObjectSignIn>('authorizations/sign-in', user);
  return response.data;
};

export const getMeFn = async () => {
  const response = await api.get<RootObjectMe>('me/1');
  return response.data;
};
