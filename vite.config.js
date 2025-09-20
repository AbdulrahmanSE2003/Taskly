import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.png" ],
  manifest: {
    name: "Taskly - Your To-Do App",
    short_name: "Taskly",
    description: "An app that helps you manage your tasks efficiently.",
    icons: [

      {
        src: "./logo.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "./logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose:'favicon'
      },
      {
        src: '/logo.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: "./logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "./logo.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon"
      },
      {
        src: "./logo.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};



// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(), VitePWA(manifestForPlugin)],
});


