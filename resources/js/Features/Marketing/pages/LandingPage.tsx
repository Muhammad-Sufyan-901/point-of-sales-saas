import { Link } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BanknoteArrowUp,
  BarChart3,
  Calendar,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  Pencil,
  RefreshCw,
  Search,
  Settings,
  ShoppingCart,
  Trash2,
  Wallet,
  X,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { Box } from '@/Core/Components/common/Box';
import { GradientText } from '@/Core/Components/common/GradientText';
import { Heading } from '@/Core/Components/common/Heading';
import { Image } from '@/Core/Components/common/Image';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { cn } from '@/Core/Utils/utils';

export default function LandingPage(): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(
      () => {
        // On First Load
        gsap.from('.hero-anim', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });

        // On Scroll
        gsap.from('.showcase-anim', {
          scrollTrigger: {
            trigger: '.showcase-trigger',
            start: 'top 80%',
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
        });
      },
      containerRef as React.RefObject<Element | null>,
    );

    return () => ctx.revert();
  }, []);

  const NAV_LINKS = [
    { label: 'Beranda', href: '#beranda', active: true },
    { label: 'Fitur', href: '#fitur', active: false },
    { label: 'Pelanggan', href: '#pelanggan', active: false },
    { label: 'Keamanan', href: '#keamanan', active: false },
    { label: 'Harga', href: '#harga', active: false },
  ];

  const MOCK_PRODUCTS = [
    {
      name: 'Butter Chicken',
      price: '$12.64',
      available: true,
      image:
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Roast Beef',
      price: '$29.00',
      available: true,
      image:
        'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Sauerkraut',
      price: '$11.55',
      available: true,
      image:
        'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Beef Kebab',
      price: '$14.95',
      available: false,
      image:
        'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Fish and Chips',
      price: '$23.05',
      available: true,
      image:
        'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Wagyu Steak',
      price: '$31.17',
      available: true,
      image:
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=200&h=150',
    },
    {
      name: 'Chicken Ramen',
      price: '$17.70',
      available: true,
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=200&h=150',
    },
  ];

  const MOCK_CART = [
    {
      name: 'Beef Kebab',
      count: 1,
      notes: 'None',
      size: 'Large',
      price: '$14.95',
      image:
        'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=60&h=40',
    },
    {
      name: 'Wagyu Steak',
      count: 1,
      notes: 'Well Med',
      size: 'Small',
      price: '$31.17',
      image:
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=60&h=40',
    },
    {
      name: 'Chicken Ramen',
      count: 1,
      notes: 'Spicy : Normal',
      size: 'Medium',
      price: '$17.70',
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=60&h=40',
    },
  ];

  const MOCK_SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: ShoppingCart, label: 'Menu Order', active: true },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Wallet, label: 'Withdrawal', active: false },
    {
      icon: LayoutDashboard,
      label: 'Manage Table',
      active: false,
      hasSub: true,
    },
    { icon: Package, label: 'Manage Dish', active: false, hasSub: true },
    { icon: BanknoteArrowUp, label: 'Manage Payment', active: false },
  ];

  const SOCIAL_AVATARS = ['NX', 'CR', 'PL', 'MV', 'PX', 'AR', 'UI'];

  return (
    <Box
      ref={containerRef as any}
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
        {/* Navigation */}
        <Box className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
          <Box className="container mx-auto px-4 lg:px-8">
            <Box className="flex h-16 items-center justify-between">
              <Box className="flex items-center gap-2">
                <Text className="flex items-center gap-2 text-base font-bold tracking-tight text-white md:text-lg">
                  <BanknoteArrowUp className="h-8 w-8 text-primary drop-shadow-md" />
                  <Link href="/">Sistem POS Multi Tenant</Link>
                </Text>
              </Box>

              <Box className="hidden items-center gap-6 md:flex">
                {NAV_LINKS.map((link) => (
                  <Text
                    key={link.label}
                    className={cn(
                      'cursor-pointer text-sm font-medium transition-colors',
                      link.active
                        ? 'font-semibold text-primary hover:text-blue-300'
                        : 'text-slate-300 hover:text-white',
                    )}
                  >
                    {link.label}
                  </Text>
                ))}
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
                {NAV_LINKS.map((link) => (
                  <Text
                    key={link.label}
                    className="block cursor-pointer px-2 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Text>
                ))}
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

        {/* Hero Section */}
        <Box className="relative pt-36 pb-20 md:pt-48 md:pb-32">
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
              <Heading
                level={1}
                className="block text-[48px] font-extrabold text-white md:text-[64px]"
              >
                Sistem Kasir Cerdas
              </Heading>
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
              transaksi real-time, kelola ribuan produk, dan tingkatkan
              penjualan dari satu platform terpusat.
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

        {/* Product Showcase */}
        <Box className="showcase-trigger relative z-10 px-4 pb-20 md:px-8 md:pb-32 lg:px-40">
          <Box className="container mx-auto max-w-[1200px] px-0">
            <Box className="showcase-anim relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#0075de] to-[#4db8ff] px-4 pt-16 pb-12 shadow-2xl md:rounded-[3rem] md:px-6 md:pt-20 lg:px-10">
              {/* Inner Background Lines on the Blue Card (Larger Grid) */}
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
                    Satu Platform, Ribuan Toko. <br /> Tidak Ada Lagi Kerepotan
                    di Toko
                  </Heading>
                </Box>

                {/* Light Theme Mockup Wrapper */}
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

                  {/* Top Header */}
                  <Box className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
                    {/* Brand / Logo */}
                    <Box className="mr-6 flex items-center gap-3 border-r border-gray-200 pr-6">
                      <Box className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0075de] font-bold text-white">
                        P
                      </Box>
                      <Box>
                        <Text className="text-sm leading-tight font-bold text-gray-900">
                          Pospay
                        </Text>
                        <Text className="text-[10px] text-gray-500">
                          Cashier Daily Assistant
                        </Text>
                      </Box>
                    </Box>

                    {/* Store / Open Switch */}
                    <Box className="flex flex-1 items-center gap-4">
                      <Box className="flex items-center gap-2">
                        <Box className="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
                          <Image
                            src="https://ui-avatars.com/api/?name=Hadid&background=random"
                            alt="Store"
                            className="h-full w-full object-cover"
                          />
                        </Box>
                        <Text className="text-sm font-semibold">
                          Hadid's Food
                        </Text>
                      </Box>
                      <Box className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                        <Text className="text-xs font-semibold">Open</Text>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </Box>
                    </Box>

                    {/* Right User Actions */}
                    <Box className="flex items-center gap-4">
                      <Box className="flex items-center gap-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <Text className="text-xs font-medium">
                          Wednesday, 27 Mar 2024 at 9:48 AM.
                        </Text>
                      </Box>
                      <Box className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
                        <MessageSquare className="h-4 w-4 text-gray-600" />
                      </Box>
                      <Box className="flex items-center gap-2 pl-2">
                        <Box className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                          <Image
                            src="https://ui-avatars.com/api/?name=Michael+Olise&background=random"
                            alt="User"
                            className="h-full w-full object-cover"
                          />
                        </Box>
                        <Text className="text-xs font-semibold">
                          Michael Olise
                        </Text>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </Box>
                    </Box>
                  </Box>

                  {/* Main Dashboard Area */}
                  <Box className="flex h-full min-h-[500px] w-full flex-row items-stretch">
                    {/* Left Sidebar */}
                    <Box className="flex w-1/5 shrink-0 flex-col justify-between border-r border-gray-200 bg-white">
                      <Box className="space-y-1 p-4">
                        {MOCK_SIDEBAR_ITEMS.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Box
                              key={item.label}
                              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                                item.active
                                  ? 'bg-[#0075de] text-white shadow-md'
                                  : 'text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              <Box className="flex items-center gap-3">
                                <Icon className="h-5 w-5" />
                                <Text
                                  className={cn(
                                    'text-sm font-semibold',
                                    item.active && 'text-white',
                                  )}
                                >
                                  {item.label}
                                </Text>
                              </Box>
                              {item.hasSub && (
                                <ChevronDown className="h-4 w-4 opacity-50" />
                              )}
                            </Box>
                          );
                        })}
                      </Box>

                      {/* Sidebar Footer */}
                      <Box className="space-y-1 border-t border-gray-200 p-4">
                        <Box className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50">
                          <Settings className="h-5 w-5" />
                          <Text className="text-sm font-semibold">
                            Settings
                          </Text>
                        </Box>
                        <Box className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50">
                          <LogOut className="h-5 w-5" />
                          <Text className="text-sm font-semibold">Logout</Text>
                        </Box>
                      </Box>
                    </Box>

                    {/* Content (Center Grill) */}
                    <Box className="flex w-1/2 shrink-0 flex-col bg-[#F8FAFC] p-6">
                      {/* Categories row */}
                      <Box className="mb-6 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                        <Box className="hide-scrollbar flex flex-nowrap gap-1.5 overflow-x-auto pb-1 xl:pb-0">
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap shadow-sm">
                            <Menu className="h-3.5 w-3.5" />
                            <Text className="font-semibold text-slate-800">
                              Dish Menu
                            </Text>
                          </Box>
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
                            <Text className="font-semibold text-slate-800">
                              All
                            </Text>
                            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
                              43
                            </Text>
                          </Box>
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
                            <Text className="font-semibold text-slate-800">
                              Beverages
                            </Text>
                            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
                              11
                            </Text>
                          </Box>
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#0075de] px-3 py-1 text-xs font-medium whitespace-nowrap text-white shadow-md">
                            <Text className="font-semibold text-white">
                              Main Course
                            </Text>
                            <Text className="ml-0.5 inline-flex rounded bg-[#0060b8] px-1 py-0.5 text-[9px] leading-none font-bold text-white">
                              16
                            </Text>
                          </Box>
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
                            <Text className="font-semibold text-slate-800">
                              Dessert
                            </Text>
                            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
                              8
                            </Text>
                          </Box>
                          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
                            <Text className="font-semibold text-slate-800">
                              Appetizer
                            </Text>
                            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
                              8
                            </Text>
                          </Box>
                        </Box>
                        <Box className="flex shrink-0 gap-2">
                          <Box className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium shadow-sm">
                            <RefreshCw className="h-3.5 w-3.5" />
                            <Text className="font-semibold text-gray-700">
                              Refresh
                            </Text>
                          </Box>
                          <Box className="flex w-32 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-400 shadow-sm">
                            <Search className="h-3.5 w-3.5" />
                            <Text className="whitespace-nowrap">
                              Search Menu
                            </Text>
                          </Box>
                        </Box>
                      </Box>

                      {/* Filter Grid */}
                      <Box className="grid grid-cols-2 gap-4 overflow-y-auto pr-2 pb-2">
                        {MOCK_PRODUCTS.slice(0, 4).map((prod, i) => (
                          <Box
                            key={i}
                            className="flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                          >
                            <Box className="relative aspect-video w-full shrink-0 bg-gray-100">
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                className="h-full w-full object-cover"
                              />
                              <Box className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 shadow-sm">
                                <Box
                                  className={`h-2 w-2 rounded-full ${prod.available ? 'bg-emerald-500' : 'bg-red-500'}`}
                                />
                                <Text className="text-[10px] font-bold text-gray-700">
                                  {prod.available
                                    ? 'Available'
                                    : 'Not Available'}
                                </Text>
                              </Box>
                            </Box>
                            <Box className="flex flex-1 flex-col p-3">
                              <Box className="mb-3 flex items-start justify-between">
                                <Text className="flex-1 pr-1 text-sm leading-tight font-bold text-slate-800">
                                  {prod.name}
                                </Text>
                                <Text className="rounded bg-gray-50 px-1 py-0.5 text-sm font-bold text-slate-800">
                                  {prod.price}
                                </Text>
                              </Box>
                              <Box className="mt-auto">
                                <Button
                                  variant="outline"
                                  className={`h-auto w-full rounded-lg border-none py-1.5 text-xs font-bold transition-all ${prod.available ? 'bg-[#0075de] text-white hover:bg-[#0060b8]' : 'bg-gray-100 text-gray-400'}`}
                                >
                                  {prod.available
                                    ? '+ Add to Cart'
                                    : '× Not Available'}
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Right Sidebar (Cart) */}
                    <Box className="flex w-[1.5/5] shrink-0 flex-col border-l border-gray-200 bg-white p-5">
                      <Box className="mb-6 flex items-center justify-between">
                        <Text className="font-bold text-slate-800">
                          Order Summary
                        </Text>
                        <Text className="text-sm font-semibold text-gray-500">
                          #B12309
                        </Text>
                      </Box>

                      <Box className="mb-6 flex-1 space-y-4">
                        {MOCK_CART.map((item, i) => (
                          <Box
                            key={i}
                            className="flex gap-3 border-b border-gray-100 pb-4"
                          >
                            <Box className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </Box>
                            <Box className="flex flex-1 flex-col">
                              <Box className="flex justify-between">
                                <Box className="mb-1 flex items-center gap-1 text-sm leading-tight font-semibold text-slate-800">
                                  {item.name}
                                  <Text className="font-normal text-gray-400">
                                    ({item.count})
                                  </Text>
                                </Box>
                              </Box>
                              <Text className="mb-1 text-[10px] leading-tight text-gray-500">
                                Notes: {item.notes} • Size: {item.size}
                              </Text>
                              <Box className="mt-auto flex items-center justify-between">
                                <Text className="text-sm font-bold text-slate-800">
                                  {item.price}
                                </Text>
                                <Box className="flex gap-2 text-gray-400">
                                  <Pencil className="h-3.5 w-3.5 cursor-pointer hover:text-[#0075de]" />
                                  <Trash2 className="h-3.5 w-3.5 cursor-pointer hover:text-red-500" />
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>

                      {/* Summary Block */}
                      <Box className="mb-4 space-y-2 border-b border-gray-200 pb-4">
                        <Box className="flex justify-between text-sm">
                          <Text className="font-medium text-gray-500">
                            Subtotal
                          </Text>
                          <Text className="font-bold text-slate-800">
                            $56.37
                          </Text>
                        </Box>
                        <Box className="flex justify-between text-sm">
                          <Text className="font-medium text-gray-500">
                            Taxes
                          </Text>
                          <Text className="font-bold text-slate-800">
                            $5.63
                          </Text>
                        </Box>
                        <Box className="flex justify-between text-sm">
                          <Text className="font-medium text-gray-500">
                            Discount
                          </Text>
                          <Text className="font-bold text-emerald-500">
                            -$5.63
                          </Text>
                        </Box>
                      </Box>
                      <Box className="mb-6 flex justify-between">
                        <Text className="font-bold text-slate-900">
                          Total Payment
                        </Text>
                        <Text className="font-bold text-slate-900">$56.37</Text>
                      </Box>

                      <Box className="mb-6 space-y-3">
                        <Box className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <Text className="pl-2 text-xs font-semibold text-gray-500">
                            Order Type
                          </Text>
                          <Box className="flex items-center gap-1 pr-2 text-sm font-bold text-slate-800">
                            Dine-in <ChevronDown className="h-4 w-4" />
                          </Box>
                        </Box>
                        <Box className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-2">
                          <Text className="pl-2 text-xs font-semibold text-gray-500">
                            Select Table
                          </Text>
                          <Box className="flex items-center gap-1 pr-2 text-sm font-bold text-slate-800">
                            A-12B <ChevronDown className="h-4 w-4" />
                          </Box>
                        </Box>
                        <Box className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                          <Box className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
                            <Text className="text-xs">🎁</Text>
                          </Box>
                          <Box className="flex-1">
                            <Text className="text-xs font-bold text-slate-800">
                              10% Discount
                            </Text>
                            <Text className="text-[10px] text-gray-500">
                              Minimum Buy $50.00
                            </Text>
                          </Box>
                          <Box className="h-4 w-4 rounded-full border-4 border-[#0075de]" />
                        </Box>
                      </Box>

                      <Button className="w-full rounded-xl bg-[#0075de] py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#0060b8]">
                        Confirm Payment
                      </Button>
                    </Box>
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
      </Box>
    </Box>
  );
}
