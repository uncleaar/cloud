import { loginUserFn } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface UseLoginMutationParams {
  mail: string;
  password: string;
}

export const useLoginMutation = (settings?: RequestMutationSettings<typeof loginUserFn>) =>
  useMutation(
    ['logInWithEmailAndPassword'],
    (params: RequestParams<UseLoginMutationParams>) => loginUserFn(params),
    settings?.options && settings.options
  );
