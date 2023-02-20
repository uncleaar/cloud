import { Layout } from 'antd';
import React, { FC } from 'react';

import styles from './Sidebar.module.scss';

const { Sider } = Layout;

type SidebarProps = {
  children: React.ReactNode;
};
export const Sidebar: FC<SidebarProps> = ({ children }) => (
  <Sider breakpoint='xl' width={320} className={styles.sidebar} style={{ background: '#f5f5f5' }}>
    {children}
  </Sider>
);
