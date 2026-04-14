import { Calendar, ChevronDown, MessageSquare } from 'lucide-react';
import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Image } from '@/Core/Components/common/Image';
import { Text } from '@/Core/Components/common/Text';
import { cn } from '@/Core/Utils/utils';

interface MockupHeaderProps {
  className?: string;
}

export default function MockupHeader({
  className,
}: MockupHeaderProps): React.JSX.Element {
  return (
    <Box
      className={cn(
        'flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6',
        className,
      )}
    >
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
          <Text className="text-sm font-semibold">Hadid's Food</Text>
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
          <Text className="text-xs font-semibold">Michael Olise</Text>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Box>
      </Box>
    </Box>
  );
}
