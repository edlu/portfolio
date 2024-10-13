import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['Project'].includes(tag),
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    // CSS preprocessing configuration
    preprocessorOptions: {
      // Add any preprocessor options here if needed
    },
  },
  build: {
    // Ensure CSS is extracted to a separate file
    cssCodeSplit: true,
    // Specify the output directory for the build
    outDir: 'dist',
    // Ensure assets are copied to the dist folder
    assetsDir: 'assets',
    rollupOptions: {
      // Specify the entry point for your app
      input: path.resolve(__dirname, 'index.html'),
      output: {
        // Specify how to name the output files
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
