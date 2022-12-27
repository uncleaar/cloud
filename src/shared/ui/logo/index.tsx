import React from 'react';
import { LogoSvg } from '@shared/ui';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div>
      <LogoSvg width={40} height={40} />
    </div>
  );
};
