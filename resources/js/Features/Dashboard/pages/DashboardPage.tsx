import { Head, Link } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import { Box } from '@/Core/Components/common/Box';
import { Text } from '@/Core/Components/common/Text';

interface DashboardProps {
  name: string;
}

export default function DashboardPage({
  name,
}: DashboardProps): React.JSX.Element {
  // We can also extract name from auth prop if needed, but we pass it explicitly from the backend in our route.

  return (
    <Box className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 font-sans">
      <Head title={`${name} Dashboard`} />

      <Box className="flex w-full max-w-lg flex-col items-center space-y-6 rounded-2xl border border-slate-200 bg-white p-12 shadow-sm">
        <Text className="text-center text-2xl font-bold text-slate-800">
          Welcome to {name} Dashboard Page
        </Text>

        <Box className="h-px w-full bg-slate-100" />

        <Link
          href="/logout"
          method="post"
          as="button"
          className="group flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-red-200 hover:bg-slate-50 hover:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4 transition-colors group-hover:text-red-500" />
          Keluar dari Aplikasi
        </Link>
      </Box>
    </Box>
  );
}
