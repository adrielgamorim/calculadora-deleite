import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

  // https://vite.dev/config/
export default defineConfig({
  base: '/calculadora-deleite/',
  resolve: {
    alias: {
      '@auth': path.resolve(__dirname, 'src/auth'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@requests': path.resolve(__dirname, 'src/requests'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.png'],
      manifest: {
        short_name: 'Calculadora Deleite',
        name: 'Calculadora Deleite',
        start_url: 'index.html',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#000000',
        icons: [
          {
            src: 'logo.png',
            sizes: 'any',
            type: 'image/svg+xml',
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    })
  ],
})
