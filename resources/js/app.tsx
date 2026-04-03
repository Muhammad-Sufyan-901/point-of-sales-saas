import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { TooltipProvider } from '@/Core/Components/ui/tooltip';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(
                el!,
                <TooltipProvider>
                    <App {...props} />
                </TooltipProvider>,
            );

            return;
        }

        createRoot(el!).render(
            <TooltipProvider>
                <App {...props} />
            </TooltipProvider>,
        );
    },
});
