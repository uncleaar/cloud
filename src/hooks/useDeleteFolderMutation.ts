import { deleteFolder } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export const useDeleteFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return deleteFolder({ params: { id: +id } });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['collections']);
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );
};
