import { Avatar, Button, Popover } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import { useStateContext } from '@context/store';
import { useLogoutMutation } from '@hooks';
import { ThemeButton } from '@shared/ui';

import styles from './Profile.module.scss';

export const Profile = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useStateContext();

  const logoutMutation = useLogoutMutation();

  const logout = () => {
    navigate('/sign-in');
    logoutMutation.mutate();
    dispatch({ type: 'LOGOUT', payload: null });
  };

  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <div>
        <Popover
          placement='bottomRight'
          trigger='click'
          content={
            <div className={styles.content}>
              <div className={styles.user}>
                {state.authUser && state.authUser.mail}
                <ThemeButton />
                <Button onClick={handleThemeChange}>Switch Theme</Button>
              </div>
              <Button onClick={logout}>Logout</Button>
            </div>
          }
        >
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </Popover>
      </div>
    </div>
  );
};
