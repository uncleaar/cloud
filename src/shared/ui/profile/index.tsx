import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ThemeButton } from '@shared/ui';
import { useLogoutMutation } from '@hooks';
import { useStateContext } from '@context/store';

import styles from './Profile.module.scss';

export const Profile = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useStateContext();

  console.log(state, 'state');

  const logoutMutation = useLogoutMutation();

  const logout = () => {
    navigate('/sign-in');
    logoutMutation.mutate();
    dispatch({ type: 'LOGOUT', payload: null });
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
