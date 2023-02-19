import React from 'react';

import { Logo, Profile, SearchF } from '@shared/ui';

import styles from './Header.module.scss';

export const Header = () => (
    <header className={styles.header}>
      <Logo />
      <SearchF />
      <Profile />
    </header>
  );
