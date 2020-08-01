import commonjs from '@rollup/plugin-commonjs'
//import external from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
//import url from '@rollup/plugin-url'
import { terser } from "rollup-plugin-terser";

import pkg from './package.json'

export default [
  {

    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      terser()
    ]
  }
]
