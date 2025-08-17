import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.js",
      name: "LodexCard",
      fileName: (f) => `index.${f}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "framer-motion"]
    },
    sourcemap: true
  }
});