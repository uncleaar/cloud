import { logout } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

export const useLogoutMutation = (settings?: RequestMutationSettings<typeof logout>) =>
  useMutation(['logoutMutation'], () => logout());
