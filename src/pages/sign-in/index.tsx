import React, { FC } from 'react';
import { Input, Image, Typography, Button, Divider } from 'antd';
import { EmailSvg, LogoSvg, PasswordSvg } from '@shared/ui';

import LoginImg from '../../app/assets/images/login.png';

import styles from './SignIn.module.scss';

const LoginPage: FC = () => {
  return (
    <div className={styles.sign_in}>
      <div className={styles.left}>
        <Image src={LoginImg} preview={false} />
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <LogoSvg />

          <Typography.Title level={4}>Sign into your account</Typography.Title>
        </div>

        <Input addonAfter={<EmailSvg />} size='large' placeholder='Email' />
        <Input addonAfter={<PasswordSvg />} placeholder='Password' size='large' />

        <Button className={styles.btn} size='large'>
          Sign in
        </Button>

        <Divider className={styles.divider}>OR</Divider>

        <Button className={styles.btn_sign} size='large'>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
