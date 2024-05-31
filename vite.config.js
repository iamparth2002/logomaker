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
      '/png': 'https://logoexpress.tubeguruji.com/',
    },
  },
})
