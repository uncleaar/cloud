import React, { FC, useEffect } from 'react';
import { Input, Image, Typography, Button, Divider, Form } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';

import { EmailSvg, InputField, LogoSvg, PasswordSvg } from '@shared/ui';
import { LoginInput, loginSchema } from '@shared/validation';
import LoginImg from '../../app/assets/images/login.png';
import { useLoginUserMutation } from '@shared/api';

import styles from './SignIn.module.scss';
import { useAppDispatch } from '../../app/store';
import { setUser } from '../../features/userSlice';
import { TypeOf } from 'zod';
import { useCookies } from 'react-cookie';

type LoginUser = {
  mail: string;
  password: string;
};

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const dispatch = useAppDispatch();
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, errors }
  } = methods;

  const [loginUser, { isLoading, isError, error, isSuccess, data }] = useLoginUserMutation();

  const from = ((location.state as any)?.from.pathname as string) || '/';

  useEffect(() => {
    if (isSuccess) {
      toast.success('You successfully logged in');
      navigate(from);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<LoginUser> = (data) => {
    loginUser(data);
  };

  if (isSuccess) {
    toast.success('You successfully logged in');
    dispatch(setUser({ user: data?.object.client, token: data?.object.token }));
    setCookie('name', data && data.object.token, { path: '/' });
    navigate(from);
  }

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
            <InputField
              control={control}
              name='mail'
              icon={<EmailSvg />}
              size='large'
              placeholder='mail'
              type='email'
              errors={errors.mail?.message}
            />

            <InputField
              control={control}
              name='password'
              icon={<PasswordSvg />}
              size='large'
              placeholder='Password'
              type='password'
              errors={errors.password?.message}
            />

            <Button className={styles.btn} size='large' htmlType='submit' loading={isLoading}>
              Sign in
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
