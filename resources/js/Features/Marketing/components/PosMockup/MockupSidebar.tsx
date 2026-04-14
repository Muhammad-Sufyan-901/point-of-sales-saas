import { ChevronDown, LogOut, Settings } from 'lucide-react';
import React from 'react';

import { Box } from '@/Core/Components/common/Box';
import { Text } from '@/Core/Components/common/Text';
import { cn } from '@/Core/Utils/utils';

import { MOCK_SIDEBAR_ITEMS } from '../../data/mockPosData';

interface MockupSidebarProps {
  className?: string;
}

export default function MockupSidebar({
  className,
}: MockupSidebarProps): React.JSX.Element {
  return (
    <Box
      className={cn(
        'flex w-1/5 shrink-0 flex-col justify-between border-r border-gray-200 bg-white',
        className,
      )}
    >
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
          <Text className="text-sm font-semibold">Settings</Text>
        </Box>
        <Box className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-50">
          <LogOut className="h-5 w-5" />
          <Text className="text-sm font-semibold">Logout</Text>
        </Box>
      </Box>
    </Box>
  );
}
