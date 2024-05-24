import { resolve } from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
console.log(__dirname);
export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
      },
      output: {
        dir: resolve(__dirname, "dist"),
      },
    },
  },
  plugins: [eslint()],
});
