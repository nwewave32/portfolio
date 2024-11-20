import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      features: path.resolve(__dirname, "src/features"),
      screen: path.resolve(__dirname, "src/screen"),
      components: path.resolve(__dirname, "src/components"),
      lib: path.resolve(__dirname, "src/lib"),
    },
  },
});
