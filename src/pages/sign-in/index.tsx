import React, { FC, useEffect } from 'react';
import { Input, Image, Typography, Button, Divider, Form } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';

import { EmailSvg, LogoSvg, PasswordSvg } from '@shared/ui';
import { LoginInput, loginSchema } from '@shared/validation';
import LoginImg from '../../app/assets/images/login.png';
import { useLoginUserMutation } from '@shared/api/auth';

import styles from './SignIn.module.scss';
import { User } from 'types';

type LoginUser = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful }
  } = methods;

  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  const from = ((location.state as any)?.from.pathname as string) || '/';

  useEffect(() => {
    if (isSuccess) {
      toast.success('You successfully logged in');
      navigate(from);
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: 'top-right'
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: 'top-right'
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<LoginUser> = (data) => loginUser(data);

  return (
    <div className={styles.sign_in}>
      <div className={styles.left}>
        <Image src={LoginImg} preview={false} />
      </div>
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.title}>
            <LogoSvg />

            <Typography.Title level={4}>Sign in into your account</Typography.Title>
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

            <Button className={styles.btn} size='large' htmlType='submit' loading={isLoading}>
              Sign up
            </Button>
          </form>

          <Divider className={styles.divider}>OR</Divider>

          <Button className={styles.btn_sign} size='large'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
