import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
    minify: !options.watch,
    sourcemap: false,
  };
});
