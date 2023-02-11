import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { ThemeButton } from '@shared/ui';
import { useLogoutMutation } from '@hooks';

export const Profile = () => {
  const navigate = useNavigate();

  const logoutMutation = useLogoutMutation();

  console.log(logoutMutation, 'logoutMutation');

  const logout = () => {
    navigate('/sign-in');
    logoutMutation.mutate();
  };
  return (
    <div>
      <div>
        <Avatar />
        <ThemeButton />
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
