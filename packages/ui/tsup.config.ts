import { defineConfig } from "tsup";

export default defineConfig({
  splitting: true,
  entry: ["src/**/*.{ts,tsx}"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
