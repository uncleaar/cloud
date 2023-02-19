import { Form, Input } from 'antd';
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
  id?: 'error' | 'success' | 'warning';
  help?: string;
}

export const InputField: FC<InputProps> = ({
  control,
  name,
  size,
  placeholder,
  type,
  icon,
  id,
  help,
  errors
}) => (
    <Form.Item validateStatus={id} help={help}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input {...field} size={size} addonAfter={icon} placeholder={placeholder} type={type} />
        )}
      />
      {errors && <div>{errors}</div>}
    </Form.Item>
  );
