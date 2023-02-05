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

import styles from './SignIn.module.scss';
import { TypeOf } from 'zod';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useStateContext } from '@context';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMeFn, loginUserFn } from '@shared/api';

type LoginUser = {
  mail: string;
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
    formState: { isSubmitSuccessful, errors }
  } = methods;
  const from = ((location.state as any)?.from.pathname as string) || '/';

  const stateContext = useStateContext();

  const query = useQuery(['authUser'], getMeFn, {
    enabled: false,
    retry: 1,
    select: (data) => data.object,
    onSuccess: (data) => {
      stateContext.dispatch({ type: 'SET_USER', payload: data });
    }
  });
  console.log(stateContext, 'stateContext');

  const { mutate: loginUser } = useMutation((userData: LoginInput) => loginUserFn(userData), {
    onSuccess: () => {
      query.refetch();
      toast.success('You successfully logged in');
      navigate(from);
    }
  });

  const onSubmit: SubmitHandler<LoginUser> = (values) => {
    loginUser(values);
  };

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

            <Button className={styles.btn} size='large' htmlType='submit'>
              Sign in
            </Button>
          </form>

          <Divider className={styles.divider}>OR</Divider>

          <Link to='/sign-up'>
            <Button className={styles.btn_sign} size='large'>
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
