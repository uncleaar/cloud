import { Typography } from 'antd';
import React, { FC } from 'react';

import { LogoSvg } from '../svg';

import styles from './Title.module.scss';

type TitleProps = { children?: React.ReactNode; level?: 1 | 2 | 3 | 4 | 5 };

export const Title: FC<TitleProps> = ({ children, level = 4 }) => (
    <div className={styles.title}>
      <LogoSvg />
      <Typography.Title level={level}>{children}</Typography.Title>
    </div>
  );
