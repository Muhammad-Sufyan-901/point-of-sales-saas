import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('Email tidak valid').min(1, 'Email wajib diisi'),
  password: z.string().min(1, 'Password wajib diisi'),
  remember: z.boolean().optional(),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(3, 'Nama minimal 3 karakter').max(255),
    email: z.email('Email tidak valid').min(1, 'Email wajib diisi'),
    password: z.string().min(8, 'Password minimal 8 karakter'),
    password_confirmation: z.string().min(8, 'Password minimal 8 karakter'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Password tidak cocok',
    path: ['password_confirmation'],
  });
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email('Email tidak valid').min(1, 'Email wajib diisi'),
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
