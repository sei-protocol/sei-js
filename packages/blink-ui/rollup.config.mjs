import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

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
      external(), // To prevent bundling peerDependencies
      resolve(), // Resolve third party dependencies in node_modules
      commonjs(), // To convert commonjs modules into ES6
      typescript({ tsconfig: './tsconfig.json' }) // To transpile our Typescript code in JS
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
  }
]
