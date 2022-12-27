import React from 'react';
import { Logo, Profile, Search } from '@shared/ui';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <Profile />
    </header>
  );
};
