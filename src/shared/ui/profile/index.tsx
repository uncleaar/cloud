import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { ThemeButton } from '@shared/ui';

export const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/sign-in');
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
