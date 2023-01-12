import typescript from '@rollup/plugin-typescript'
const production = !process.env.ROLLUP_WATCH

export default {
  input: './src/main.ts',
  strictDeprecations: true,
  output: [
    {
      format: 'es',
      file: 'dist/index.es.js',
      sourcemap: !production
    }
  ],
  plugins: [
    typescript({
      sourceMap: !production,
      inlineSources: !production
    })
  ]
}
