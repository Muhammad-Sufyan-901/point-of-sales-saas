import { Link } from '@inertiajs/react';
import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { GradientText } from '@/Core/Components/common/GradientText';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { cn } from '@/Core/Utils/utils';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({
  className,
}: HeroSectionProps): React.JSX.Element {
  return (
    <Box className={cn('relative pt-36 pb-20 md:pt-48 md:pb-32', className)}>
      <Box className="container mx-auto max-w-4xl px-4 text-center">
        <Box className="hero-anim mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[#0075de]/40 bg-[#0075de]/10 px-4 py-1.5 backdrop-blur-sm">
          <Text className="text-[10px] font-bold tracking-widest text-[#0075de] sm:text-xs">
            PLATFORM POS MULTI TENANT
          </Text>
        </Box>

        <Heading
          level={1}
          className="hero-anim mb-8 text-center text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <Text className="block text-[48px] font-extrabold text-white md:text-[64px]">
            Sistem Kasir Cerdas
          </Text>
          <GradientText
            colors={['#1d4ed8', '#3b82f6', '#0066ff', '#818cf8']}
            animationSpeed={6}
            showBorder={false}
            className="mt-2 block pb-2 text-[48px] font-extrabold! md:text-[64px]"
          >
            Untuk Semua Bisnis Anda.
          </GradientText>
        </Heading>

        <Text className="hero-anim mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed font-normal text-slate-300 md:text-[1.1rem]">
          Hasilkan sistem Point of Sales instan untuk setiap cabang. Pantau
          transaksi real-time, kelola ribuan produk, dan tingkatkan penjualan
          dari satu platform terpusat.
        </Text>

        <Box className="hero-anim flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/register">
            <Button className="h-12 w-full rounded-full bg-linear-to-r from-[#0075de] to-[#4db8ff] px-8 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,117,222,0.4)] transition-all duration-300 hover:scale-105 hover:from-[#1a88ff] hover:to-[#65c5ff] hover:shadow-[0_0_30px_rgba(0,117,222,0.6)] sm:w-auto">
              Mulai Gratis Sekarang
            </Button>
          </Link>
          <Button className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto">
            Pelajari Fitur
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
