import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: {
        MyButton: resolve(__dirname, "src/Button/index.tsx"),
        MyInput: resolve(__dirname, "src/Input/index.tsx"),
      },
      fileName: (format, fileName) => `${fileName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // preserveModules: true,
      },
    },
  },
});
