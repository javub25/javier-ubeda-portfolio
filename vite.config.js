import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@features',
        replacement: path.resolve(path.join(__dirname, '/src/features')),
      },
      {
        find: '@languages',
        replacement: path.resolve(path.join(__dirname, '/src/languages')),
      },
      {
        find: '@scripts',
        replacement: path.resolve(path.join(__dirname, '/src/scripts')),
      },
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets/img')),
      },
    ]
  }
})
