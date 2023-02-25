import { confirmAccount } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface useConfirmAccountParams {
  clientId: string;
  token: string;
}

export const useConfirmAccountMutation = (settings?: RequestMutationSettings<typeof confirmAccount>) =>
  useMutation(
    ['useConfirmAccount'],
    (params: RequestParams<useConfirmAccountParams>) => confirmAccount(params),
    settings?.options && settings.options
  );
