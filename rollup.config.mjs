import pkg from "./package.json" assert { type: "json" };
import { externals } from "rollup-plugin-node-externals";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
// import dts from "rollup-plugin-dts";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "index.ts",

    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },

    plugins: [
      terser(),
      externals(),
      typescript({
        tsconfig: "./tsconfig.json",
        tsconfigOverride: {
          exclude: ["src", "hooks"],
        },
      }),
    ],
  },
  // {
  //   input: pkg.module,
  //   output: [{ file: pkg.types, format: "esm" }],
  //   plugins: [dts(), terser()],
  // },
]);
