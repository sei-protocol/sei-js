import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Main entry point for your library
      name: "ConfidentialTransfers", // Global variable name when used in non-module environments
      fileName: (format) => `index.${format}.js`, // Output file format
      formats: ["es", "cjs"], // Generate both ESM and CommonJS builds
    },
    rollupOptions: {
    //   external: ["path", "url"], // Prevent bundling Node.js modules
    //   output: {
    //     exports: "named", // Ensure named exports in CommonJS
    //   },
    },
  },
  plugins: [
    nodePolyfills(),
    wasm(),
    topLevelAwait(),
    viteStaticCopy({
      targets: [
        {
          src: "confidentialWasm/ct.wasm", // Path to your WASM file
          dest: "", // Destination directory in the `dist` folder
        },
        {
          src: "src/payload/wasm_exec.cjs",
          dest: "payload" // copies to dist/payload/
        }
      ],
    }),
  ],
});
