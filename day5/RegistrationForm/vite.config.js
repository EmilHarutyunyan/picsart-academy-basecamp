import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
  ],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      router: "/src/router",
      pages: "/src/pages",
      services: "/src/services",
    },
  },
  // server: {
  //   port: 3000,
  //   host: true
  // },
});
