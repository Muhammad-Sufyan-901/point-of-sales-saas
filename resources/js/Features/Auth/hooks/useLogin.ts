import { router } from '@inertiajs/react';
import { useState } from 'react';
import type { LoginFormValues } from '../schemas/auth.schema';

export function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const mutate = (data: LoginFormValues) => {
    setIsPending(true);
    setError(null);
    router.post('/login', data, {
      onError: (err) => {
        setIsPending(false);
        // Map Inertia error to match the structure expected by the original component
        setError({
          response: {
            data: {
              message:
                err.email ||
                err.password ||
                'Login failed. Please check your credentials.',
            },
          },
        });
      },
      onFinish: () => setIsPending(false),
    });
  };

  return { mutate, isPending, error };
}
