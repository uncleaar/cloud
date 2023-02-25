import { deleteFolder } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((id) => deleteFolder({ params: { id: +id } }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['classifications']);
    },
    onError: (error) => {
      console.log(error);
    }
  });
};
