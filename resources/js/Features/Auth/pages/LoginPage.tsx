import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@inertiajs/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@/Core/Components/common/Box';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { Checkbox } from '@/Core/Components/ui/checkbox';
import { Input } from '@/Core/Components/ui/input';
import { Label } from '@/Core/Components/ui/label';

import { useLogin } from '../hooks/useLogin';
import { AuthLayout } from '../layouts/AuthLayout';
import { loginSchema } from '../schemas/auth.schema';
import type { LoginFormValues } from '../schemas/auth.schema';

export default function LoginPage(): React.JSX.Element {
  const { mutate: login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  // Catch API Error Message
  const apiErrorMessage = error?.response?.data?.message;

  return (
    <Box className="w-full max-w-[420px]">
      {/* Header */}
      <Box className="mb-10">
        <Heading
          level={2}
          className="mb-4 text-[32px] font-extrabold tracking-tight text-slate-900"
        >
          Selamat Datang
        </Heading>
        <Text className="text-[15px] font-medium text-slate-500">
          Silahkan masukkan detail akun Anda untuk mengakses Sistem Point of
          Sales (POS).
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
          <Box className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="block text-sm font-bold text-slate-800"
            >
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm font-bold text-blue-600 transition-colors hover:underline"
            >
              Lupa Password?
            </Link>
          </Box>
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

        {/* Options */}
        <Box className="flex items-center justify-between pt-1">
          <Box className="group flex items-center space-x-2.5">
            <Checkbox
              id="remember"
              onCheckedChange={(checked) =>
                setValue('remember', checked as boolean)
              }
              className="h-5 w-5 rounded border-slate-300 bg-white focus-visible:ring-blue-600/20 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
            />
            <Label
              htmlFor="remember"
              className="cursor-pointer text-sm font-semibold text-slate-700"
            >
              Ingat saya
            </Label>
          </Box>
        </Box>

        {/* Submit Button */}
        <Box className="space-y-5 pt-4">
          <Button
            type="submit"
            disabled={isPending}
            className="group flex h-auto w-full items-center justify-center rounded-md border-0 primary-gradient-button px-4 py-3 text-[15px] font-bold text-white hover:scale-[102%] disabled:opacity-70"
          >
            {isPending ? 'Memproses...' : 'Masuk ke Sistem'}
            {!isPending && (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            )}
          </Button>

          {/* Separator */}
          <Box className="relative">
            <Box className="absolute inset-0 flex items-center">
              <Box className="w-full border-t border-slate-200"></Box>
            </Box>
            <Box className="relative flex justify-center text-sm">
              <Text className="bg-white px-2 font-medium tracking-wide text-slate-500">
                Atau
              </Text>
            </Box>
          </Box>

          {/* Google Sign In */}
          <Button
            type="button"
            variant="outline"
            disabled
            className="flex h-auto w-full items-center justify-center rounded-md border-slate-200 bg-white px-4 py-3 text-[15px] font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Masuk dengan Google
          </Button>
        </Box>
      </Box>

      <Text className="mt-8 block text-center text-sm font-medium text-slate-500">
        Belum memiliki akun?{' '}
        <Link
          href="/register"
          className="font-bold text-blue-600 transition-colors hover:underline"
        >
          Daftar sekarang
        </Link>
      </Text>
    </Box>
  );
}

LoginPage.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
