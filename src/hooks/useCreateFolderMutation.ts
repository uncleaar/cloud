import { createFolder } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface UseCreateFolderMutationParams {
  name: string;
}

export const useCreateFolderMutation = (settings?: RequestMutationSettings<typeof createFolder>) =>
  useMutation(
    ['useCreateFolderMutation'],
    (params: RequestParams<UseCreateFolderMutationParams>) => createFolder(params),
    settings?.options && settings.options
  );
