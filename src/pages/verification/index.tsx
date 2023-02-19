import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import VerificationInput from 'react-verification-input';

import { useStateContext } from '@context/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useConfirmAccountMutation } from '@hooks';
import { ConfirmAccount } from '@shared/api';
import { InputField, Title, VerificationCodeInput } from '@shared/ui';
import { VerificationInp, verificationSchema } from '@shared/validation';

import styles from './Verification.module.scss';

const Verification = () => {
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  const { state, dispatch } = useStateContext();
  const methods = useForm<VerificationInp>({
    resolver: zodResolver(verificationSchema)
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = methods;

  const confirmMutation = useConfirmAccountMutation({
    options: {
      onSuccess: (data) => {
        toast.success(data.status.code);
        navigate('/');
      },

      onError: (data) => {
        toast.error(data.response.data.status.description);
      }
    }
  });

  return (
    <div className={styles.verification}>
      <Title>Verification account</Title>

      <form
        onSubmit={handleSubmit(async ({ token }) => {
          const formData: any = new FormData();

          formData.append('token', token);
          formData.append('clientId', state.authUser?.entityId);

          confirmMutation.mutate(formData);
        })}
        className={styles.form_inner}
      >
        <span>Enter the code sent to your email : </span>

        <VerificationCodeInput name='token' control={control} />

        <Button className={styles.button} htmlType='submit'>
          Enter
        </Button>
      </form>
    </div>
  );
};
export default Verification;
