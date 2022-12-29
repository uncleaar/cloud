import { Input } from 'antd';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
  name: string;
  control: any;
  size: 'small' | 'middle' | 'large';
  placeholder?: string;
  type: string;
  icon?: any;
  errors?: string;
}

export const InputField: FC<InputProps> = ({
  control,
  name,
  size,
  placeholder,
  type,
  icon,
  errors
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input {...field} size={size} addonAfter={icon} placeholder={placeholder} type={type} />
        )}
      />
      {errors && <div>{errors}</div>}
    </>
  );
};
