import { Avatar, Button, Popover, Select } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div>
        <Popover
          placement='bottomRight'
          trigger='click'
          style={{ padding: 0 }}
          content={
            <div className={styles.content}>
              <div className={styles.user}>
                <div>{state.authUser && state.authUser.mail}</div>
              </div>

              <div className={styles.flex}>
                <div>Theme:</div>
                <ThemeButton />
              </div>

              <div className={styles.flex}>
                <div>Language:</div>
                <Select
                  defaultValue='RU'
                  style={{ width: '100%' }}
                  showArrow
                  onChange={handleChange}
                  options={[
                    { value: 'russian', label: 'RU' },
                    { value: 'kazakh', label: 'KZ' },
                    { value: 'english', label: 'EN' }
                  ]}
                />
              </div>
              <div className={styles.flex}>
                <Button onClick={logout} type='text' icon={<LogoutOutlined />} className={styles.btn}>
                  Logout
                </Button>
              </div>
            </div>
          }
        >
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </Popover>
      </div>
    </div>
  );
};
