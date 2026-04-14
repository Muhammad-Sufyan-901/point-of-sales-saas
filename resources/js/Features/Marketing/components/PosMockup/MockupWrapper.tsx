import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';
import { cn } from '@/Core/Utils/utils';

import { SOCIAL_AVATARS } from '../../data/mockPosData';
import MockupCart from './MockupCart';
import MockupGrid from './MockupGrid';
import MockupHeader from './MockupHeader';
import MockupSidebar from './MockupSidebar';

interface MockupWrapperProps {
  className?: string;
}

export default function MockupWrapper({
  className,
}: MockupWrapperProps): React.JSX.Element {
  return (
    <Box
      className={cn(
        'showcase-trigger relative z-10 px-4 pb-20 md:px-8 md:pb-32 lg:px-40',
        className,
      )}
    >
      <Box className="container mx-auto max-w-[1200px] px-0">
        <Box className="showcase-anim relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#0075de] to-[#4db8ff] px-4 pt-16 pb-12 shadow-2xl md:rounded-[3rem] md:px-6 md:pt-20 lg:px-10">
          {/* Inner Background Lines on the Blue Card */}
          <Box
            className="pointer-events-none absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: 'center top',
            }}
          />

          <Box className="relative flex w-full flex-col items-center">
            {/* Top Header */}
            <Box className="showcase-anim mb-12 flex flex-col items-center text-center">
              <Box className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-xl backdrop-blur-sm">
                <Text className="text-xs font-bold tracking-widest text-white">
                  TAMPILAN INTUITIF
                </Text>
              </Box>
              <Heading
                level={2}
                className="text-4xl font-extrabold text-white md:text-5xl lg:text-5xl"
              >
                Satu Platform, Ribuan Toko. <br />
                Tidak Ada Lagi Kerepotan di Toko
              </Heading>
            </Box>

            {/* Light Theme Mockup */}
            <Box className="showcase-anim mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[20px] border border-white/40 bg-[#F5F7FA] text-slate-800 shadow-2xl">
              {/* macOS Title Bar */}
              <Box className="flex h-10 w-full items-center justify-between border-b border-gray-200 bg-[#E5E7EB] px-4">
                <Box className="flex items-center gap-2">
                  <Box className="h-3 w-3 rounded-full bg-[#EC6A5F] shadow-sm" />
                  <Box className="h-3 w-3 rounded-full bg-[#F4BF50] shadow-sm" />
                  <Box className="h-3 w-3 rounded-full bg-[#61C454] shadow-sm" />
                </Box>
                <Text className="text-xs font-bold tracking-wide text-gray-500">
                  Pospay Dashboard
                </Text>
                <Box className="w-12 text-transparent">.</Box>
              </Box>

              {/* Dashboard Header */}
              <MockupHeader />

              {/* Main Dashboard Area */}
              <Box className="flex h-full min-h-[500px] w-full flex-row items-stretch">
                <MockupSidebar />
                <MockupGrid />
                <MockupCart />
              </Box>
            </Box>

            {/* Social Proof */}
            <Box className="mt-16 flex flex-col items-center">
              <Box className="mb-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md">
                {SOCIAL_AVATARS.map((initials, index) => (
                  <Box
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white text-xs font-bold text-[#0075de] shadow-inner"
                  >
                    {initials}
                  </Box>
                ))}
              </Box>
              <Text className="text-sm font-medium text-white/90">
                Dipercaya oleh 500+ bisnis retail
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
