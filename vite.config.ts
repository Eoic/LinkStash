import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '',
    server: {
        port: 9000,
    },
    plugins: [react()],
});
