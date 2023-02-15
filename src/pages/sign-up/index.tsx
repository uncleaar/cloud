import React, { FC } from 'react';
import { Input, Image, Typography, Button, Divider, Form } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailSvg, LogoSvg, PasswordSvg } from '@shared/ui';

import RegisterImg from '../../app/assets/images/register.png';

import styles from './SignUp.module.scss';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { RegisterInput, registerSchema } from '@shared/validation';
import { useNavigate } from 'react-router';
import { useRegisterMutation } from '@hooks';
import { toast } from 'react-toastify';

type RegisterUser = {
  mail: string;
  password: string;
  name: string;
  surname: string;
  patronymic: string;
  passwordConfirm: string;
};

const RegisterPage: FC = () => {
  const navigate = useNavigate();

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema)
  });

  const { register, handleSubmit, control, formState, setError } = methods;
  const registerMutation = useRegisterMutation({
    options: {
      onSuccess: () => {
        toast.success('You successfully logged in');
        navigate('/');
      }
    }
  });
  return (
    <div className={styles.sign_up}>
      <div className={styles.left}>
        <div className={styles.form}>
          <div className={styles.title}>
            <LogoSvg />
            <Typography.Title level={4}>Sign up into your account</Typography.Title>
          </div>

          <form
            onSubmit={handleSubmit(
              ({ name, surname, mail, password, passwordConfirm, patronymic }) =>
                registerMutation.mutate({
                  name,
                  surname,
                  mail,
                  password,
                  passwordConfirm,
                  patronymic
                })
            )}
            className={styles.form_inner}
          >
            <Controller
              control={control}
              name='name'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='First Name' type='text' />
              )}
            />

            <Controller
              control={control}
              name='surname'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='Last Name' type='text' />
              )}
            />

            <Controller
              control={control}
              name='patronymic'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='Middle Name' type='text' />
              )}
            />
            <Controller
              control={control}
              name='mail'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='mail' type='email' />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='Password' type='password' />
              )}
            />

            <Controller
              control={control}
              name='passwordConfirm'
              render={({ field }) => (
                <Input {...field} size='large' placeholder='Confirm Password' type='password' />
              )}
            />

            <Button className={styles.btn} size='large' htmlType='submit'>
              Sign up
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={RegisterImg} preview={false} />
      </div>
    </div>
  );
};

export default RegisterPage;
