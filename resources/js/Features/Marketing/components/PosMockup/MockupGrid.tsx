import { Menu, RefreshCw, Search } from 'lucide-react';
import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Image } from '@/Core/Components/common/Image';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { cn } from '@/Core/Utils/utils';

import { MOCK_PRODUCTS } from '../../data/mockPosData';

interface MockupGridProps {
  className?: string;
}

export default function MockupGrid({
  className,
}: MockupGridProps): React.JSX.Element {
  return (
    <Box className={cn('flex w-1/2 shrink-0 flex-col bg-[#F8FAFC] p-6', className)}>
      {/* Categories row */}
      <Box className="mb-6 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <Box className="hide-scrollbar flex flex-nowrap gap-1.5 overflow-x-auto pb-1 xl:pb-0">
          <Box className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium whitespace-nowrap shadow-sm">
            <Menu className="h-3.5 w-3.5" />
            <Text className="font-semibold text-slate-800">Dish Menu</Text>
          </Box>
          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
            <Text className="font-semibold text-slate-800">All</Text>
            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
              43
            </Text>
          </Box>
          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
            <Text className="font-semibold text-slate-800">Beverages</Text>
            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
              11
            </Text>
          </Box>
          <Box className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#0075de] px-3 py-1 text-xs font-medium whitespace-nowrap text-white shadow-md">
            <Text className="font-semibold text-white">Main Course</Text>
            <Text className="ml-0.5 inline-flex rounded bg-[#0060b8] px-1 py-0.5 text-[9px] leading-none font-bold text-white">
              16
            </Text>
          </Box>
          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
            <Text className="font-semibold text-slate-800">Dessert</Text>
            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
              8
            </Text>
          </Box>
          <Box className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium whitespace-nowrap">
            <Text className="font-semibold text-slate-800">Appetizer</Text>
            <Text className="ml-0.5 inline-flex rounded bg-gray-100 px-1 py-0.5 text-[9px] leading-none font-bold text-slate-600">
              8
            </Text>
          </Box>
        </Box>
        <Box className="flex shrink-0 gap-2">
          <Box className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium shadow-sm">
            <RefreshCw className="h-3.5 w-3.5" />
            <Text className="font-semibold text-gray-700">Refresh</Text>
          </Box>
          <Box className="flex w-32 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-400 shadow-sm">
            <Search className="h-3.5 w-3.5" />
            <Text className="whitespace-nowrap">Search Menu</Text>
          </Box>
        </Box>
      </Box>

      {/* Product Grid */}
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
                  {prod.available ? 'Available' : 'Not Available'}
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
                  {prod.available ? '+ Add to Cart' : '× Not Available'}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
