import React, { FC } from 'react';
import { Input, Image, Typography, Button, Divider, Form } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailSvg, LogoSvg, PasswordSvg } from '@shared/ui';

import LoginImg from '../../app/assets/images/login.png';

import { useLoginUserMutation } from '@shared/api/auth';

import styles from './SignIn.module.scss';
import { User } from 'types';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { LoginInput, loginSchema } from '@shared/validation';

type LoginUser = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  const { register, handleSubmit, control } = methods;
  const onSubmit: SubmitHandler<LoginUser> = (data) => loginUser(data);

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

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form_inner}>
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <Input
                {...field}
                size='large'
                addonAfter={<EmailSvg />}
                placeholder='email'
                type='email'
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field }) => (
              <Input
                {...field}
                size='large'
                addonAfter={<PasswordSvg />}
                placeholder='password'
                type='password'
              />
            )}
          />

          <Button className={styles.btn} size='large' htmlType='submit'>
            Sign in
          </Button>
        </form>

        <Divider className={styles.divider}>OR</Divider>

        <Button className={styles.btn_sign} size='large'>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
