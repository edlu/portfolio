import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/', // Changed from '/portfolio/' to '/'
  build: {
    outDir: 'docs' // This is important for GitHub Pages when deploying from master
  }
})
