import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput, RegisterInput } from '@shared/validation';

const BASE_URL = 'http://localhost:8090';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/authorizations`
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<Response, RegisterInput>({
      query(data) {
        return {
          url: 'sign-up',
          method: 'POST',
          body: data
        };
      }
    }),
    loginUser: builder.mutation<
      {
        object: Object;
        status: string;
      },
      LoginInput
    >({
      query(data) {
        return {
          url: 'sign-in',
          method: 'POST',
          body: data,
          credentials: 'include'
        };
      }
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include'
        };
      }
    })
  })
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation } = authApi;
