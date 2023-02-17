import { AxiosRequestConfig } from 'axios';
import { ConfirmAccount, Folder, RequestFolder, RootObjectSignIn, RootObjectSignUp } from './types';
import { LoginInput, RegisterInput } from '@shared/validation';
import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/v1/';

const BASE_URL_ = 'http://localhost:8091/api/v1/';

interface RequestClientByMail {
  params: { mail: string };
  config?: AxiosRequestConfig;
}

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export const api_ = axios.create({
  baseURL: BASE_URL_,
  withCredentials: true
});

api.defaults.headers.common['Content-Type'] = 'application/json';
api_.defaults.headers.common['Content-Type'] = 'application/json';

export const loginUserFn = async (user: LoginInput) => {
  const response = await api.post<RootObjectSignIn>('authorizations/sign-in', user);

  return response.data;
};

export const signUpUserFn = async (user: RegisterInput) => {
  const response = await api.post<RootObjectSignUp>('authorizations/sign-up', user);

  return response.data;
};

// export const getClientByMail = async ({ params, config }: RequestClientByMail) => {
//   const response = await api.get<RootObjectMe>(`me?mail=${params.mail}`);
//   return response.data;
// };

export const confirmAccount = async (info: ConfirmAccount) => {
  const response = await api.post('authorizations/confirm-account/', info);
  return response.data;
};

export const logout = async () => {
  const response = await api.get('authorizations/logout');
  return response.data;
};

export const getClassifications = async () => {
  const response = await api_.get('classifications');
  return response.data;
};

export const createFolder = async (data: Folder) => {
  const response = await api_.post('classifications', data);
  return response.data;
};

export const deleteFolder = async ({ params, config }: RequestFolder) => {
  const response = await api_.delete(`classifications/${params.id}`, { ...config });
  return response.data;
};
