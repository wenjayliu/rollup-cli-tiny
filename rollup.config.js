import { readFileSync } from 'fs';
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
// eslint-disable-next-line import/no-extraneous-dependencies
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
// import pkg from './package.json'
const  pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

export default {
  input: 'src/index.ts',
  strictDeprecations: true,
  output: [
    {
      format: 'es',
      file: pkg.bin,
      banner: '#!/usr/bin/env node\nglobal.navigator= { userAgent: "node.js", };',
      sourcemap: true
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    json(),
    // typescript({ sourceMap: true }),
    typescript({
      include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
      useTsconfigDeclarationDir: true
    }),
    copy({
      targets: [
         {
           src: 'template/*',
           dest: 'bin/template'
         }
       ]
     })
  ]
}
