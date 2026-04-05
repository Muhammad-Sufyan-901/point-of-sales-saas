import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@inertiajs/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Box } from '@/Core/Components/common/Box';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { Input } from '@/Core/Components/ui/input';
import { Label } from '@/Core/Components/ui/label';

import { useForgotPassword } from '../hooks/useForgotPassword';
import { AuthLayout } from '../layouts/AuthLayout';
import { forgotPasswordSchema } from '../schemas/auth.schema';
import type { ForgotPasswordFormValues } from '../schemas/auth.schema';

export default function ForgotPasswordPage() {
  const {
    mutate: sendResetLink,
    isPending,
    error,
    isSuccess,
  } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    sendResetLink(data);
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
          Lupa Password?
        </Heading>
        <Text className="text-[15px] font-medium text-slate-500">
          Kami akan mengirimkan link untuk mereset password ke email Anda.
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

      {/* Success Alert */}
      {isSuccess && (
        <Box className="mb-6 rounded-xl border border-green-100 bg-green-50 p-4 shadow-sm">
          <Text className="text-sm font-medium text-green-700">
            Link reset password telah dikirim ke email Anda. Silakan cek kotak
            masuk atau folder spam.
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
              disabled={isSuccess}
            />
          </Box>
          {errors.email && (
            <Text className="text-xs font-medium text-red-500">
              {errors.email.message}
            </Text>
          )}
        </Box>

        {/* Submit Button */}
        <Box className="pt-4">
          <Button
            type="submit"
            disabled={isPending || isSuccess}
            className="flex h-auto w-full items-center justify-center rounded-md border-0 bg-linear-to-r from-blue-600 to-blue-500 px-4 py-3 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:to-blue-600 disabled:opacity-70"
          >
            {isPending ? 'Mengirim...' : 'Kirim Link Reset Password'}
            {!isPending && (
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        </Box>
      </Box>

      <Text className="mt-8 block text-center text-sm font-medium text-slate-500">
        Ingat password Anda?{' '}
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

ForgotPasswordPage.layout = (page: React.ReactNode) => (
  <AuthLayout>{page}</AuthLayout>
);
