import { createFolder, loginUserFn } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface UseCreateFolderMutationParams {
  name: string;
}

export const useCreateFolderMutation = (settings?: RequestMutationSettings<typeof loginUserFn>) =>
  useMutation(
    ['useLoginMutation'],
    (params: RequestParams<UseCreateFolderMutationParams>) => createFolder(params),
    settings?.options && settings.options
  );
