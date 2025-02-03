import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 
  build: {
    rollupOptions: {
      external: ['/AppendApp/assets/index-D3IaSB0i.js', '/AppendApp/assets/index-BStG4hcz.css'],
    },
  },
  base: "/AppendApp/",
  plugins: [react()],
})
