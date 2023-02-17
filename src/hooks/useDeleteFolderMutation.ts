import { createFolder, deleteFolder } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

interface UseDeleteFolderMutationParams {
  id: number;
}

export const useDeleteFolderMutation = (
  params: RequestParams<UseDeleteFolderMutationParams>,
  settings?: RequestMutationSettings<typeof createFolder>
) =>
  useMutation(
    ['useCreateFolderMutation', params.id],
    (params: RequestParams<UseDeleteFolderMutationParams>) => deleteFolder({ params }),
    settings?.options && settings.options
  );
