import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@context': path.resolve(__dirname, './src/context'),
            '@reducers': path.resolve(__dirname, './src/reducers'),
            '@uicomponents': path.resolve(__dirname, './src/components/ui'),
            '@formcomponents': path.resolve(__dirname, './src/components/form'),
            '@formSteps': path.resolve(__dirname, './src/components/form/formSteps')
        },
    },
});
