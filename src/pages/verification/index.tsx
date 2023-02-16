import { Title } from '@shared/ui';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import VerificationInput from 'react-verification-input';

import styles from './Verification.module.scss';

const Verification = () => {
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className={styles.verification}>
      <Title>Verification account</Title>

      <div className={styles.code}>
        <span>Enter the code sent to your email : </span>
        <VerificationInput
          classNames={{
            container: 'container',
            character: 'character',
            characterInactive: 'character--inactive',
            characterSelected: 'character--selected'
          }}
          validChars='/^\d+$/'
        />
      </div>

      <Button className={styles.button}>Enter</Button>
    </div>
  );
};
export default Verification;
