import React, { FC } from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

import styles from './Sidebar.module.scss';

type SidebarProps = {
  children: React.ReactNode;
};
export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sider
      theme='light'
      breakpoint='xl'
      width={320}
      className={styles.sidebar}
      style={{ background: '#f5f5f5' }}
    >
      {children}
    </Sider>
  );
};
