import { router } from '@inertiajs/react';
import { useState } from 'react';
import type { ApiErrorResponse } from '@/Core/Types/api.types';
import type { RegisterFormValues } from '../schemas/auth.schema';

export function useRegister() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<ApiErrorResponse | null>(null);

  const mutate = (data: RegisterFormValues) => {
    setIsPending(true);
    setError(null);

    router.post('/register', data, {
      onError: (err) => {
        setIsPending(false);
        setError({
          response: {
            data: {
              message:
                err.name ||
                err.email ||
                err.password ||
                'Gagal mendaftar. Silahkan periksa kembali detail Anda.',
            },
          },
        });
      },
      onFinish: () => setIsPending(false),
    });
  };

  return { mutate, isPending, error };
}
