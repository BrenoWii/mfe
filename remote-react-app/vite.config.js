import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  build:{
    target: 'esnext'
  },
  plugins: [
    react(),
    federation({
    name: 'remote-app',
    filename: 'remoteEntry.js',
    // Modules to expose
    exposes: {
        './Button': './src/components/Button.jsx',
        './Providers': './src/components/objeto.ts',
    },
    shared: ['react', 'react-dom']
    })
  ],
})
