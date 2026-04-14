import { Link } from '@inertiajs/react';
import { BanknoteArrowUp, Menu, X } from 'lucide-react';
import React, { useCallback, useState } from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { cn } from '@/Core/Utils/utils';

import { NAV_LINKS } from '../data/mockPosData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LandingNavbarProps {
  className?: string;
}

export default function LandingNavbar({
  className,
}: LandingNavbarProps): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('beranda');

  const handleIntersection = useCallback(
    (target: Element, isIntersecting: boolean) => {
      if (isIntersecting) {
        setActiveSection(target.id);
      }
    },
    [],
  );

  useIntersectionObserver('section[id]', handleIntersection);

  return (
    <Box
      className={cn(
        'fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl',
        className,
      )}
    >
      <Box className="container mx-auto px-4 lg:px-8">
        <Box className="flex h-16 items-center justify-between">
          <Box className="flex items-center gap-2">
            <Text className="flex items-center gap-2 text-base font-bold tracking-tight text-white md:text-lg">
              <BanknoteArrowUp className="h-8 w-8 text-primary drop-shadow-md" />
              <Link href="/">Sistem POS Multi Tenant</Link>
            </Text>
          </Box>

          <Box className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeSection}`;

              return (
                <Box
                  key={link.label}
                  as="a"
                  href={link.href}
                  className={cn(
                    'cursor-pointer text-sm transition-all duration-300',
                    isActive
                      ? 'bg-linear-to-r from-[#3b82f6] to-[#818cf8] bg-clip-text font-bold text-transparent'
                      : 'font-medium text-slate-300 hover:text-white',
                  )}
                >
                  {link.label}
                </Box>
              );
            })}
          </Box>

          <Box className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="cursor-pointer text-sm font-medium transition-colors hover:text-white"
            >
              <Button className="h-9 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Masuk
              </Button>
            </Link>
            <Link href="/register">
              <Button className="h-9 rounded-full bg-linear-to-r from-[#0075de] to-[#4db8ff] px-5 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-[#1a88ff] hover:to-[#65c5ff]">
                Mulai Gratis
              </Button>
            </Link>
          </Box>

          <Box
            className="flex cursor-pointer items-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </Box>
        </Box>

        {mobileOpen && (
          <Box className="border-t border-white/5 pb-4 md:hidden">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeSection}`;

              return (
                <Box
                  key={link.label}
                  as="a"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block cursor-pointer px-2 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-linear-to-r from-[#3b82f6] to-[#818cf8] bg-clip-text font-bold text-transparent'
                      : 'text-slate-300 hover:text-white',
                  )}
                >
                  {link.label}
                </Box>
              );
            })}
            <Box className="mt-4 flex flex-col gap-2 px-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full justify-center rounded-full bg-linear-to-r from-[#0075de] to-[#4db8ff] text-sm font-semibold text-white transition-all hover:from-[#1a88ff] hover:to-[#65c5ff]">
                  Mulai Gratis
                </Button>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
