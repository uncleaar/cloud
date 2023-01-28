import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
  mail: string().min(1, 'Mail address is required').email('Mail Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters')
});

export type LoginInput = TypeOf<typeof loginSchema>;
