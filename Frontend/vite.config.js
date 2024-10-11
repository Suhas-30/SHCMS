import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/add-car': {  // Change this endpoint as needed
                target: 'http://localhost:3000', // Your backend server URL
                changeOrigin: true,
                secure: false,
            },
            '/previous-owner-form': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
            '/customer-reg':{
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure:false,
            },
            '/customer-login':{
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure:false,
            },

        },
    },
});
