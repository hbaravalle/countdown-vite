import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "./src/scss/variables.scss";`,
      },
    }, 
  },
});
