import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/add-car-form': {
                target: 'http://localhost:3000', // Your backend server URL
                changeOrigin: true,
                secure: false,
            },
            '/previous-owner-form': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/customer-reg': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/customer-login': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/cars': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/payment': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/sales': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/previous-owner-details': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/total-sales': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            }
        },
    },
});
