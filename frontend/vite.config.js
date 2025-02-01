import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
  origin: 'http://127.0.0.1:8080',
  },
  plugins: [react(),tailwindcss()],
})


