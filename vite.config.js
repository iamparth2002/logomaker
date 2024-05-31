import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    commonJsOptions: { transformMixedEsModules: true }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
      server: {
    proxy: {
      '/png': {
        target: 'https://logoexpress.tubeguruji.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
