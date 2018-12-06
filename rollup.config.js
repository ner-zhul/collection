/* eslint-disable import/no-extraneous-dependencies */
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: { name: 'collection', file: pkg.main, format: 'es' },
  plugins: [resolve()],
  external: ['@ner-zhul/type-is'],
};
