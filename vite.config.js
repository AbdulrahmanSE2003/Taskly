// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // لو عايز SW يحدث نفسه تلقائي
      manifest: {
        name: "Taskly - Your To-Do App",
        short_name: "Taskly",
        description: "Manage your tasks efficiently",
        theme_color: "#181818",
        background_color: "#e8eac2",
        display: "standalone", // مهم جداً لـ installable
        start_url: "/",
        scope: "/",
        orientation: "portrait",
        icons: [
          {
            src: "logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
                request.destination === 'document' ||
                request.destination === 'script' ||
                request.destination === 'style' ||
                request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 يوم
              }
            }
          }
        ]
      }
    })
  ]
})
