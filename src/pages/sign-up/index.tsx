import { Button, Divider, Form,Image, Input, Typography } from 'antd';
import React, { FC } from 'react';
import { Controller,useForm  } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { useStateContext } from '@context/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '@hooks';
import { EmailSvg, InputField, LogoSvg, PasswordSvg, Title } from '@shared/ui';
import { RegisterInput, registerSchema } from '@shared/validation';

import RegisterImg from '../../app/assets/images/register.png';

import styles from './SignUp.module.scss';

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
  const { state, dispatch } = useStateContext();

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema)
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = methods;
  const registerMutation = useRegisterMutation({
    options: {
      onSuccess: (data) => {
        toast.success(data.status.code);

        console.log(data, 'data');

        dispatch({ type: 'SET_USER', payload: data.object });
        navigate('/verification');
      },

      onError: (data) => {
        toast.error(data.response.data.status.description);
      }
    }
  });

  return (
    <div className={styles.sign_up}>
      <div className={styles.left}>
        <div className={styles.form}>
          <div className={styles.title}>
            <Title>Sign up into your account</Title>
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
            <InputField
              control={control}
              name='name'
              size='large'
              placeholder='Name'
              type='text'
              id={errors.name?.message ? 'error' : 'success'}
              help={errors.name?.message}
            />

            <InputField
              control={control}
              name='surname'
              size='large'
              placeholder='Surname'
              type='text'
              id={errors.surname?.message ? 'error' : 'success'}
              help={errors.surname?.message}
            />

            <InputField
              control={control}
              name='patronymic'
              size='large'
              placeholder='Patronymic'
              type='text'
              id={errors.patronymic?.message ? 'error' : 'success'}
              help={errors.patronymic?.message}
            />

            <InputField
              control={control}
              name='mail'
              icon={<EmailSvg />}
              size='large'
              placeholder='Email'
              type='email'
              id={errors.mail?.message ? 'error' : 'success'}
              help={errors.mail?.message}
            />

            <InputField
              control={control}
              name='password'
              size='large'
              placeholder='Password'
              type='password'
              id={errors.password?.message ? 'error' : 'success'}
              help={errors.password?.message}
            />

            <InputField
              control={control}
              name='passwordConfirm'
              size='large'
              placeholder='Password confirm'
              type='password'
              id={errors.passwordConfirm?.message ? 'error' : 'success'}
              help={errors.passwordConfirm?.message}
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
