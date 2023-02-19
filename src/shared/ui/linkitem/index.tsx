import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Link.module.scss';

interface LinkItemProps {
  icon?: any;
  text: string;
  path?: string;
}

export const LinkItem: FC<LinkItemProps> = ({ icon, text, path }) => (
    <div className={styles.item}>
      {icon}
      {path && <Link to={path}>{text}</Link>}
    </div>
  );
