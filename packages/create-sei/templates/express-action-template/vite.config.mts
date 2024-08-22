import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["**/node_modules/**", "**/index.ts"],
    },
    globals: true,
    restoreMocks: true,
  },
});
