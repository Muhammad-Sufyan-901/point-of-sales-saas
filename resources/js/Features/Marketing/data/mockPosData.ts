import {
  BarChart3,
  BanknoteArrowUp,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Wallet,
} from 'lucide-react';

import type {
  MockCartItem,
  MockProduct,
  MockSidebarItem,
  NavLink,
} from '../types/pos';

// ── Navigation ─────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '#beranda', active: true },
  { label: 'Fitur', href: '#fitur', active: false },
  { label: 'Pelanggan', href: '#pelanggan', active: false },
  { label: 'Keamanan', href: '#keamanan', active: false },
  { label: 'Harga', href: '#harga', active: false },
];

// ── Products ───────────────────────────────────────────────────────
export const MOCK_PRODUCTS: MockProduct[] = [
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

// ── Cart ───────────────────────────────────────────────────────────
export const MOCK_CART: MockCartItem[] = [
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

// ── Sidebar ────────────────────────────────────────────────────────
export const MOCK_SIDEBAR_ITEMS: MockSidebarItem[] = [
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

// ── Social Proof ───────────────────────────────────────────────────
export const SOCIAL_AVATARS: string[] = [
  'NX',
  'CR',
  'PL',
  'MV',
  'PX',
  'AR',
  'UI',
];
