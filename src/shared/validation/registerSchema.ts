import { object, string, TypeOf } from 'zod';

export const registerSchema = object({
  name: string().min(1, 'First name is required').max(100),
  surname: string().min(1, 'Last name is required').max(100),
  patronymic: string().min(1, 'Middle name is required').max(100),
  mail: string().min(1, 'Mail address is required').email('Mail Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password')
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match'
});

export type RegisterInput = TypeOf<typeof registerSchema>;
