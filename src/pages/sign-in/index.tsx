import { Button, Divider, Form,Image, Typography } from 'antd';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useStateContext } from '@context/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@hooks';
import { EmailSvg, InputField, LogoSvg, PasswordSvg } from '@shared/ui';
import { LoginInput, loginSchema } from '@shared/validation';

import LoginImg from '../../app/assets/images/login.png';

import styles from './SignIn.module.scss';

type LoginUser = {
  mail: string;
  password: string;
};

const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { dispatch } = useStateContext();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, errors }
  } = methods;
  const from = ((location.state as any)?.from.pathname as string) || '/';

  const logInWithEmailAndPassword = useLoginMutation({
    options: {
      onSuccess: (data) => {
        toast.success(data.status.code);

        dispatch({ type: 'SET_USER', payload: data.object.client });
        navigate('/');
      },

      onError: (data) => {
        toast.error(data.response.data.status.description);
      }
    }
  });

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

          <form
            onSubmit={handleSubmit(async ({ password, mail }) =>
              logInWithEmailAndPassword.mutate({
                mail,
                password
              })
            )}
            className={styles.form_inner}
          >
            <InputField
              control={control}
              name='mail'
              icon={<EmailSvg />}
              size='large'
              placeholder='mail'
              type='email'
              id={errors.mail?.message ? 'error' : 'success'}
              help={errors.mail?.message}
            />

            <InputField
              control={control}
              name='password'
              icon={<PasswordSvg />}
              size='large'
              placeholder='Password'
              type='password'
              id={errors.password?.message ? 'error' : 'success'}
              help={errors.password?.message}
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

          <Button className={styles.btn_sign} size='large' onClick={() => console.log({})}>
            Sign up with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
