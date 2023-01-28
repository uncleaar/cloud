import { useAppSelector, useAppDispatch } from '../../../app/store';
import React from 'react';
import { logout } from '../../../features/userSlice';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.userState);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const signout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
    dispatch(logout());
  };
  return (
    <div>
      {user && user.name}
      <button onClick={signout}>logout</button>
    </div>
  );
};
