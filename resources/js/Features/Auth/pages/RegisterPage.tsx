import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@inertiajs/react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Box } from '@/Core/Components/common/Box';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { Input } from '@/Core/Components/ui/input';
import { Label } from '@/Core/Components/ui/label';

import { useRegister } from '../hooks/useRegister';
import { AuthLayout } from '../layouts/AuthLayout';
import { registerSchema } from '../schemas/auth.schema';
import type { RegisterFormValues } from '../schemas/auth.schema';

export default function RegisterPage() {
  const { mutate: registerUser, isPending, error } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    registerUser(data);
  };

  const apiErrorMessage = error?.response?.data?.message;

  return (
    <Box className="w-full max-w-[420px]">
      {/* Header */}
      <Box className="mb-10">
        <Heading
          level={2}
          className="mb-4 text-[32px] font-extrabold tracking-tight text-slate-900"
        >
          Buat Akun Baru
        </Heading>
        <Text className="text-[15px] font-medium text-slate-500">
          Daftarkan akun baru Anda untuk mendapatkan akses ke sistem.
        </Text>
      </Box>

      {/* Global Error Alert */}
      {apiErrorMessage && (
        <Box className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 shadow-sm">
          <Text className="text-sm font-medium text-red-600">
            {apiErrorMessage}
          </Text>
        </Box>
      )}

      {/* Form */}
      <Box as="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <Box className="space-y-2">
          <Label
            htmlFor="name"
            className="block text-sm font-bold text-slate-800"
          >
            Nama Lengkap
          </Label>
          <Box className="relative">
            <Box className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <User className="h-5 w-5 text-slate-400" />
            </Box>
            <Input
              id="name"
              type="text"
              {...register('name')}
              placeholder="John Doe"
              className="h-auto w-full rounded-md border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20"
            />
          </Box>
          {errors.name && (
            <Text className="text-xs font-medium text-red-500">
              {errors.name.message}
            </Text>
          )}
        </Box>

        {/* Email Input */}
        <Box className="space-y-2">
          <Label
            htmlFor="email"
            className="block text-sm font-bold text-slate-800"
          >
            Email
          </Label>
          <Box className="relative">
            <Box className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Mail className="h-5 w-5 text-slate-400" />
            </Box>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="you@company.com"
              className="h-auto w-full rounded-md border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20"
            />
          </Box>
          {errors.email && (
            <Text className="text-xs font-medium text-red-500">
              {errors.email.message}
            </Text>
          )}
        </Box>

        {/* Password Input */}
        <Box className="space-y-2">
          <Label
            htmlFor="password"
            className="block text-sm font-bold text-slate-800"
          >
            Password
          </Label>
          <Box className="relative">
            <Box className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Lock className="h-5 w-5 text-slate-400" />
            </Box>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="••••••••"
              className="h-auto w-full rounded-md border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20"
            />
          </Box>
          {errors.password && (
            <Text className="text-xs font-medium text-red-500">
              {errors.password.message}
            </Text>
          )}
        </Box>

        {/* Confirm Password Input */}
        <Box className="space-y-2">
          <Label
            htmlFor="password_confirmation"
            className="block text-sm font-bold text-slate-800"
          >
            Konfirmasi Password
          </Label>
          <Box className="relative">
            <Box className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Lock className="h-5 w-5 text-slate-400" />
            </Box>
            <Input
              id="password_confirmation"
              type="password"
              {...register('password_confirmation')}
              placeholder="••••••••"
              className="h-auto w-full rounded-md border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20"
            />
          </Box>
          {errors.password_confirmation && (
            <Text className="text-xs font-medium text-red-500">
              {errors.password_confirmation.message}
            </Text>
          )}
        </Box>

        {/* Submit Button */}
        <Box className="pt-4">
          <Button
            type="submit"
            disabled={isPending}
            className="flex h-auto w-full items-center justify-center rounded-md border-0 bg-linear-to-r from-blue-600 to-blue-500 px-4 py-3 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:to-blue-600 disabled:opacity-70"
          >
            {isPending ? 'Mendaftar...' : 'Daftar Akun'}
            {!isPending && (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        </Box>
      </Box>

      <Text className="mt-8 block text-center text-sm font-medium text-slate-500">
        Sudah memiliki akun?{' '}
        <Link
          href="/login"
          className="font-bold text-blue-600 transition-colors hover:underline"
        >
          Masuk di sini
        </Link>
      </Text>
    </Box>
  );
}

RegisterPage.layout = (page: React.ReactNode) => (
  <AuthLayout>{page}</AuthLayout>
);
