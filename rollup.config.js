import globImport from "rollup-plugin-glob-import";
import metablock from "rollup-plugin-userscript-metablock";
import resolveJsonModule from "@rollup/plugin-json";
import styles from "rollup-plugin-styler";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";
import svelte from "rollup-plugin-svelte";
import nodeResolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";
import { readdir } from "fs/promises";

const swcOpts = {
  swc: {
    jsc: {
      parser: {
        syntax: "typescript",
      },
      target: "esnext",
    },
  },
};

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: "src/index.ts",
    output: {
      file: "public/X+.user.js",
    },
    plugins: [
      nodeResolve({ extensions: [".ts"] }),
      globImport({ format: "import" }),
      resolveJsonModule(),
      styles({ minimize: true }),
      swc(swcOpts),
      terser(),
      metablock(),
    ],
  },
  {
    input: "ui/index.ts",
    output: { file: "public/index.js" },
    plugins: [
      svelte({
        extensions: [".svelte"],
        include: "ui/**/*.svelte",
      }),
      nodeResolve({
        browser: true,
        exportConditions: ["svelte"],
        extensions: [".svelte"],
      }),
      styles({ minimize: true }),
      swc(swcOpts),
      terser(),
      html({
        title: "X+ UI",
      }),
    ],
    onwarn: (warning, handler) => {
      if (warning.code == "CIRCULAR_DEPENDENCY") return;
      handler(warning);
    },
  },
].concat(
  // Compile addons
  (await readdir("addons", { withFileTypes: true }))
    .filter((dir) => dir.isDirectory())
    .map((dir) => ({
      input: `./addons/${dir.name}/index.ts`,
      output: { file: `public/X+.${dir.name}.user.js` },
      plugins: [
        nodeResolve({ extensions: [".ts"] }),
        globImport({ format: "import" }),
        resolveJsonModule(),
        styles({ minimize: true }),
        swc(swcOpts),
        terser(),
        metablock({ file: `./addons/${dir.name}/metablock.json` }),
      ],
    }))
);
