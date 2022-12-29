import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput, RegisterInput } from '@shared/validation';
import { RootState } from 'app/store';
import { Response } from 'types';
import { user } from './user';

const BASE_URL = 'http://localhost:8090/api/v1';

export const auth = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<Response, RegisterInput>({
      query(data) {
        return {
          url: '/authorizations/sign-up',
          method: 'POST',
          body: data
        };
      }
    }),
    loginUser: builder.mutation<{ token: string; status: string }, LoginInput>({
      query(data) {
        return {
          url: '/authorizations/sign-in',
          method: 'POST',
          body: data,
          credentials: 'include'
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(user.endpoints.getMe.initiate(null));
        } catch (error) {}
      }
    }),
    verifyEmail: builder.mutation<Response, { verificationCode: string }>({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: 'GET'
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

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation } = auth;
