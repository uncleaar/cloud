import { signUpUserFn } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface UseRegisterMutationParams {
  surname: string;
  name: string;
  patronymic: string;
  mail: string;
  password: string;
  passwordConfirm: string;
}

export const useRegisterMutation = (settings?: RequestMutationSettings<typeof signUpUserFn>) =>
  useMutation(
    ['signUpUserFn'],
    (params: RequestParams<UseRegisterMutationParams>) => signUpUserFn(params),
    settings?.options && settings.options
  );
