import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // group libraries
          firebase: ['firebase/app', 'firebase/firestore'],   // if using firebase
        }
      }
    }
  }
}) 
