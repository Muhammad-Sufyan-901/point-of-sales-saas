import React from 'react';

import { Box } from '@/Core/Components/common/Box';

import HeroSection from '../components/HeroSection';
import LandingNavbar from '../components/LandingNavbar';
import MockupWrapper from '../components/PosMockup/MockupWrapper';
import { useLandingAnimations } from '../hooks/useLandingAnimations';

export default function LandingPage(): React.JSX.Element {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useLandingAnimations(containerRef);

  return (
    <Box
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white"
    >
      {/* Background Grid Pattern */}
      <Box
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
            radial-gradient(circle at 1px 1px, rgba(0,117,222,0.8) 2px, transparent 2px)
          `,
          backgroundSize: '4rem 4rem, 4rem 4rem, 4rem 4rem',
          backgroundPosition: 'center top',
          maskImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)',
        }}
      />
      <Box className="pointer-events-none absolute top-[400px] left-1/2 z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#0075de]/15 blur-[120px]" />

      <Box className="relative z-10">
        <LandingNavbar />

        <Box as="section" id="beranda">
          <HeroSection />
        </Box>

        <Box as="section" id="fitur">
          <MockupWrapper />
        </Box>
      </Box>
    </Box>
  );
}
