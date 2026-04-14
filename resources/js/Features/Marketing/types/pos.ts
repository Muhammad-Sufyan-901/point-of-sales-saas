import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  active: boolean;
}

export interface MockProduct {
  name: string;
  price: string;
  available: boolean;
  image: string;
}

export interface MockCartItem {
  name: string;
  count: number;
  notes: string;
  size: string;
  price: string;
  image: string;
}

export interface MockSidebarItem {
  icon: LucideIcon;
  label: string;
  active: boolean;
  hasSub?: boolean;
}
