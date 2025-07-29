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
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@requests': path.resolve(__dirname, 'src/requests'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        short_name: 'Calculadora Deleite',
        name: 'Calculadora Deleite',
        start_url: 'index.html',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#000000',
        icons: [
          {
            src: 'vite.svg', // Should be in public/
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
