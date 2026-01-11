/// <reference types="vite/client" />

interface Window {
    gtag: (
        command: 'consent' | 'config' | 'event',
        targetId: string,
        config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
}
