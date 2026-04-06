import { Link } from '@inertiajs/react';
import { BanknoteArrowUp } from 'lucide-react';
import { Box } from '@/Core/Components/common/Box';
import { GradientText } from '@/Core/Components/common/GradientText';
import { Heading } from '@/Core/Components/common/Heading';
import { Text } from '@/Core/Components/common/Text';

export function AuthSideHero(): React.JSX.Element {
  return (
    <Box
      className="relative hidden w-[60%] flex-col justify-center overflow-hidden px-16 py-12 text-white lg:flex"
      style={{
        background:
          'radial-gradient(circle at bottom right, #0066ff 0%, #051945 40%, #020617 100%)',
      }}
    >
      {/* Logo */}
      <Box className="absolute top-12 left-16 flex items-center space-x-3">
        <BanknoteArrowUp className="h-8 w-8 text-primary drop-shadow-md" />
        <Link href="/">
          <Text className="text-xl font-bold tracking-tight text-white drop-shadow-md">
            Sistem POS Multi-Tenant
          </Text>
        </Link>
      </Box>

      {/* Hero Content */}
      <Box className="relative z-10 mt-8 w-full max-w-2xl">
        <Box className="mb-8 inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <Box className="h-2.5 w-2.5 rounded-full bg-blue-500"></Box>
          <Text className="text-xs font-semibold tracking-wide text-slate-300">
            Sistem Point of Sales berbasis Multi-Tenant
          </Text>
        </Box>

        <Heading
          level={1}
          className="mb-8 text-[64px] leading-[1.05] font-extrabold tracking-tight text-white"
        >
          Bangun Sistem Kasir Instan
          <Box as="br" />
          <GradientText
            colors={['#1d4ed8', '#3b82f6', '#0066ff', '#818cf8']}
            animationSpeed={6}
            showBorder={false}
            className="text-[64px] font-extrabold!"
          >
            Untuk Setiap Cabang Anda.
          </GradientText>
        </Heading>

        <Text className="mb-8 max-w-md text-[16px] leading-relaxed font-medium text-slate-300">
          Hasilkan Point of Sales khusus untuk toko Anda dalam hitungan detik.
          Kelola produk, pantau transaksi real-time, dan tingkatkan penjualan
          dari satu platform terpusat.
        </Text>
      </Box>

      {/* Footer Copyright */}
      <Box className="absolute bottom-12 left-16">
        <Text className="font-mono text-xs font-medium tracking-wide text-slate-500">
          © {new Date().getFullYear()} Sistem POS Multi-Tenant.
        </Text>
      </Box>
    </Box>
  );
}
