import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { ThemeButton } from '@shared/ui';
import { useLogoutMutation } from '@hooks';
import { useStateContext } from '@context/store';

export const Profile = () => {
  const navigate = useNavigate();

  const { state } = useStateContext();

  console.log(state, 'state');

  const logoutMutation = useLogoutMutation();

  const logout = () => {
    navigate('/sign-in');
    logoutMutation.mutate();
  };
  return (
    <div>
      <div>
        {state.authUser && state.authUser.mail}
        <Avatar />
        <ThemeButton />
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
