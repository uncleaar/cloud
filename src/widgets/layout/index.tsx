import { Button, Card, ConfigProvider, Layout, theme } from 'antd';
import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { StarOutlined } from '@ant-design/icons';
import { LinkItem } from '@shared/ui';
import { Header, Sidebar } from '@widgets';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const { Content } = Layout;

export const Wrapper: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Layout>
      <Header />
      <Layout>
        <Sidebar>
          <LinkItem text='Starred' icon={<StarOutlined />} path='/starred' />
        </Sidebar>
        <Content> {children}</Content>
      </Layout>
    </Layout>
    <Outlet />
  </div>
);
