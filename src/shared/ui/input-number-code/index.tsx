import React from 'react';
import { Controller } from 'react-hook-form';
import VerificationInput from 'react-verification-input';

interface VerificationCodeInputProps {
  name: string;
  control: any;
  rules?: any;
}

export const VerificationCodeInput = ({ name, control, rules }: VerificationCodeInputProps) => (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <VerificationInput
          value={field.value}
          classNames={{
            container: 'container',
            character: 'character',
            characterInactive: 'character--inactive',
            characterSelected: 'character--selected'
          }}
          validChars='0-9'
          onChange={field.onChange}
        />
      )}
    />
  );
