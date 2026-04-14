import { ChevronDown, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Image } from '@/Core/Components/common/Image';
import { Text } from '@/Core/Components/common/Text';
import { Button } from '@/Core/Components/ui/button';
import { cn } from '@/Core/Utils/utils';

import { MOCK_CART } from '../../data/mockPosData';

interface MockupCartProps {
  className?: string;
}

export default function MockupCart({
  className,
}: MockupCartProps): React.JSX.Element {
  return (
    <Box
      className={cn(
        'flex w-[1.5/5] shrink-0 flex-col border-l border-gray-200 bg-white p-5',
        className,
      )}
    >
      <Box className="mb-6 flex items-center justify-between">
        <Text className="font-bold text-slate-800">Order Summary</Text>
        <Text className="text-sm font-semibold text-gray-500">#B12309</Text>
      </Box>

      <Box className="mb-6 flex-1 space-y-4">
        {MOCK_CART.map((item, i) => (
          <Box key={i} className="flex gap-3 border-b border-gray-100 pb-4">
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
          <Text className="font-medium text-gray-500">Subtotal</Text>
          <Text className="font-bold text-slate-800">$56.37</Text>
        </Box>
        <Box className="flex justify-between text-sm">
          <Text className="font-medium text-gray-500">Taxes</Text>
          <Text className="font-bold text-slate-800">$5.63</Text>
        </Box>
        <Box className="flex justify-between text-sm">
          <Text className="font-medium text-gray-500">Discount</Text>
          <Text className="font-bold text-emerald-500">-$5.63</Text>
        </Box>
      </Box>
      <Box className="mb-6 flex justify-between">
        <Text className="font-bold text-slate-900">Total Payment</Text>
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
  );
}
