/* eslint-disable import/no-extraneous-dependencies */
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';
/* eslint-enable import/no-extraneous-dependencies */

export default {
  input: 'src/main.js',
  output: [
    { name: 'collection', file: pkg.module, format: 'es' },
    { name: 'collection', file: pkg.main, format: 'cjs' },
  ],
  plugins: [resolve()],
  external: ['@ner-zhul/type-is'],
};
