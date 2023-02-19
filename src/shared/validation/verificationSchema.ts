import { object, string, TypeOf } from 'zod';

export const verificationSchema = object({
  token: string().nullable()
});

export type VerificationInp = TypeOf<typeof verificationSchema>;
