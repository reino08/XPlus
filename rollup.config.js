import globImport from "rollup-plugin-glob-import";
import metablock from "rollup-plugin-userscript-metablock";
import resolveJsonModule from "@rollup/plugin-json";
import styles from "rollup-plugin-styler";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";
import svelte from "rollup-plugin-svelte";
import nodeResolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";

const swcOpts = {
  swc: {
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
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
      globImport({
        format: "import",
      }),
      resolveJsonModule(),
      styles({ minimize: true }),
      swc(swcOpts),
      terser(),
      metablock(),
    ],
  },
  {
    input: "ui/index.ts",
    output: {
      file: "public/index.js",
    },
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
];
