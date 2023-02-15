import React from 'react';

import styles from './InputNumberCode.module.scss';

export const InputNumberCode = () => {
  return (
    <div className={styles.container}>
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to fantacydesignss@gmail.com <br /> Enter the code below
        to confirm your email address.
      </p>
      <div className={styles.code_container}>
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
        <input type='number' className={styles.code} placeholder='0' min='0' max='9' required />
      </div>
      <small className={styles.info}>
        This is design only. We didn't actually send you an email as we don't have your email,
        right?
      </small>
    </div>
  );
};
