import { router } from '@inertiajs/react';
import { useState } from 'react';
import type { ApiErrorResponse } from '@/Core/Types/api.types';
import type { LoginFormValues } from '../schemas/auth.schema';

export function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<ApiErrorResponse | null>(null);

  const mutate = (data: LoginFormValues) => {
    setIsPending(true);
    setError(null);

    router.post('/login', data, {
      onError: (err) => {
        setIsPending(false);
        setError({
          response: {
            data: {
              message:
                err.email ||
                err.password ||
                'Gagal login. Silahkan periksa kembali kredensial Anda.',
            },
          },
        });
      },
      onFinish: () => setIsPending(false),
    });
  };

  return { mutate, isPending, error };
}
