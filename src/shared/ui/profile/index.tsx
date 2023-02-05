import { useAppSelector, useAppDispatch } from '../../../app/store';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';

export const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/sign-in');
  };
  return (
    <div>
      <div>
        <Avatar />
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
