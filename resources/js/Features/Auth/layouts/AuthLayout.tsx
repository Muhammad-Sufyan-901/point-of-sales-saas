import React from 'react';
import { Box } from '@/Core/Components/common/Box';
import { AuthSideHero } from '@/Features/Auth/components/AuthSideHero';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps): React.JSX.Element {
  return (
    <Box className="flex min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Box className="flex min-h-screen w-full">
        <AuthSideHero />

        <Box className="z-20 flex w-full items-center justify-center bg-white p-8 shadow-[-20px_0_40px_rgba(0,0,0,0.05)] lg:w-[40%] lg:p-12">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
