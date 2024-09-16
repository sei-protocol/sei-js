import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json' assert { type: 'json' };
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      json(), // To import json files
      external(), // To prevent bundling peerDependencies
      resolve({ preferBuiltins: true }), // Resolve third party dependencies in node_modules
      commonjs(), // To convert commonjs modules into ES6
      typescript({ tsconfig: './tsconfig.json' }), // To transpile our Typescript code in JS
      postcss({ // PostCSS plugin to process and bundle CSS
        inject: true, // Inject CSS into the bundle
        minimize: true, // Minify the CSS
        sourceMap: true, // Enable source maps for CSS
      }),
    ],
  },
  {
    input: 'dist/esm/src/types/index.d.ts',
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
  }
];
