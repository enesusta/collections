import commonjs from '@rollup/plugin-commonjs'
//import external from 'rollup-plugin-peer-deps-external'
//import resolve from '@rollup/plugin-node-resolve'
//import url from '@rollup/plugin-url'
import { terser } from "rollup-plugin-terser";
import creator from './rollup.config.creator';

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
      commonjs(),
      //terser()
    ]
  },
  creator('list', true),
  creator('list', false),
  creator('queue', true),
  creator('queue', false)
]
