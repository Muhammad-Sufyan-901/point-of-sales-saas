import { router } from '@inertiajs/react';
import { useState } from 'react';
import type { ApiErrorResponse } from '@/Core/Types/api.types';
import type { ForgotPasswordFormValues } from '../schemas/auth.schema';

export function useForgotPassword() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<ApiErrorResponse | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const mutate = (data: ForgotPasswordFormValues) => {
    setIsPending(true);
    setError(null);
    setIsSuccess(false);

    router.post('/forgot-password', data, {
      onError: (err) => {
        setIsPending(false);
        setError({
          response: {
            data: { message: err.email || 'Gagal mengirim link reset.' },
          },
        });
      },
      onSuccess: () => {
        setIsPending(false);
        setIsSuccess(true);
      },
      onFinish: () => setIsPending(false),
    });
  };

  return { mutate, isPending, error, isSuccess };
}
